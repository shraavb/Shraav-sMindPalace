import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

// Mock the info module
jest.mock('../../info', () => ({
  flat_picture: 'test-picture.jpg',
  name: 'Test Name',
  tagline: 'Test Tagline',
  research_focus: 'Test Research Focus',
  current_work: 'Test Current Work',
  email: 'test@example.com',
  links: {
    linkedin: 'https://linkedin.com/test',
    github: 'https://github.com/test'
  }
}))

describe('Home.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      propsData: {
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

  it('displays the name from info', () => {
    expect(wrapper.find('.hero-name').text()).toBe('Test Name')
  })

  it('displays the research focus', () => {
    expect(wrapper.find('.hero-focus').text()).toBe('Test Research Focus')
  })

  it('displays the current work', () => {
    expect(wrapper.find('.hero-current').text()).toBe('Test Current Work')
  })

  it('applies light mode classes when nightMode is false', () => {
    expect(wrapper.find('.bg-white').exists()).toBe(true)
    expect(wrapper.find('.bg-dark').exists()).toBe(false)
  })

  it('applies dark mode classes when nightMode is true', async () => {
    await wrapper.setProps({ nightMode: true })
    expect(wrapper.find('.bg-dark').exists()).toBe(true)
    expect(wrapper.find('.bg-white').exists()).toBe(false)
  })

  it('renders the avatar image with correct src', () => {
    const img = wrapper.find('.avatar-image')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('test-picture.jpg')
  })

  it('renders quick link buttons', () => {
    const buttons = wrapper.findAll('.quick-link-btn')
    expect(buttons.length).toBe(4) // Email, Resume, LinkedIn, GitHub
  })

  it('emits showResume event when Resume button is clicked', async () => {
    const resumeButton = wrapper.findAll('.quick-link-btn').at(1)
    await resumeButton.trigger('click')
    expect(wrapper.emitted('showResume')).toBeTruthy()
  })

  it('renders email link with correct href', () => {
    const emailLink = wrapper.findAll('.quick-link-btn').at(0)
    expect(emailLink.attributes('href')).toBe('mailto:test@example.com')
  })

  it('renders LinkedIn link with correct href', () => {
    const linkedinLink = wrapper.findAll('.quick-link-btn').at(2)
    expect(linkedinLink.attributes('href')).toBe('https://linkedin.com/test')
  })

  it('renders GitHub link with correct href', () => {
    const githubLink = wrapper.findAll('.quick-link-btn').at(3)
    expect(githubLink.attributes('href')).toBe('https://github.com/test')
  })
})
