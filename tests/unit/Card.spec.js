import { shallowMount } from '@vue/test-utils'
import Card from '@/components/helpers/Card.vue'

describe('Card.vue', () => {
  let wrapper
  const mockPortfolio = {
    name: 'Test Project',
    description: 'This is a test project description that showcases some features.',
    technologies: ['Vue.js', 'JavaScript', 'CSS'],
    pictures: [{ img: 'test-image.jpg', pdf: 'test.pdf' }],
    visit: 'https://example.com',
    github: 'https://github.com/test/project'
  }

  beforeEach(() => {
    wrapper = shallowMount(Card, {
      propsData: {
        portfolio: mockPortfolio,
        nightMode: false
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the project name', () => {
    expect(wrapper.find('.title2').text()).toContain('Test Project')
  })

  it('displays the project description', () => {
    expect(wrapper.find('.title3').text()).toContain('This is a test project')
  })

  it('renders technology badges', () => {
    const badges = wrapper.findAll('.badge')
    expect(badges.length).toBe(3)
    expect(badges.at(0).text()).toBe('Vue.js')
    expect(badges.at(1).text()).toBe('JavaScript')
    expect(badges.at(2).text()).toBe('CSS')
  })

  it('renders project image with correct src', () => {
    const img = wrapper.find('.card-img-top')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('test-image.jpg')
  })

  it('applies light mode card class when nightMode is false', () => {
    expect(wrapper.find('.pcard').exists()).toBe(true)
    expect(wrapper.find('.pcard-dark').exists()).toBe(false)
  })

  it('applies dark mode card class when nightMode is true', async () => {
    await wrapper.setProps({ nightMode: true })
    expect(wrapper.find('.pcard-dark').exists()).toBe(true)
    expect(wrapper.find('.pcard').exists()).toBe(false)
  })

  it('renders "read more" button', () => {
    const buttons = wrapper.findAll('button')
    const readMoreBtn = buttons.filter(btn => btn.text() === 'read more')
    expect(readMoreBtn.length).toBe(1)
  })

  it('renders "visit project" button when visit URL is provided', () => {
    const buttons = wrapper.findAll('button')
    const visitBtn = buttons.filter(btn => btn.text() === 'visit project')
    expect(visitBtn.length).toBe(1)
  })

  it('renders "repo" button when github URL is provided', () => {
    const buttons = wrapper.findAll('button')
    const repoBtn = buttons.filter(btn => btn.text() === 'repo')
    expect(repoBtn.length).toBe(1)
  })

  it('does not render "visit project" button when visit URL is not provided', async () => {
    await wrapper.setProps({
      portfolio: { ...mockPortfolio, visit: null }
    })
    const buttons = wrapper.findAll('button')
    const visitBtn = buttons.filter(btn => btn.text() === 'visit project')
    expect(visitBtn.length).toBe(0)
  })

  it('does not render "repo" button when github URL is not provided', async () => {
    await wrapper.setProps({
      portfolio: { ...mockPortfolio, github: null }
    })
    const buttons = wrapper.findAll('button')
    const repoBtn = buttons.filter(btn => btn.text() === 'repo')
    expect(repoBtn.length).toBe(0)
  })

  it('emits "show" event with portfolio data when "read more" is clicked', async () => {
    const readMoreBtn = wrapper.findAll('button').filter(btn => btn.text() === 'read more').at(0)
    await readMoreBtn.trigger('click')
    expect(wrapper.emitted('show')).toBeTruthy()
    expect(wrapper.emitted('show')[0][0]).toEqual(mockPortfolio)
  })

  it('truncates long descriptions', async () => {
    const longDescription = 'A'.repeat(150)
    await wrapper.setProps({
      portfolio: { ...mockPortfolio, description: longDescription }
    })
    const description = wrapper.find('.title3')
    expect(description.text()).toContain('...')
  })

  it('shows in-progress badge when project name includes it', async () => {
    await wrapper.setProps({
      portfolio: { ...mockPortfolio, name: "Test Project <span class='badge badge-warning ml-2'>in-progress</span>" }
    })
    const badge = wrapper.find('.badge-warning')
    expect(badge.exists()).toBe(true)
    expect(badge.text()).toBe('in-progress')
  })
})
