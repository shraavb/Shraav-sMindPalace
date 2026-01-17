import { shallowMount } from '@vue/test-utils'
import Skills from '@/components/Skills.vue'

// Mock the info module
jest.mock('../../info', () => ({
  skills: [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      info: ['JavaScript', 'Python', 'Java']
    },
    {
      title: 'Frameworks',
      icon: 'fas fa-layer-group',
      info: ['Vue.js', 'React', 'Node.js']
    },
    {
      title: 'Tools',
      icon: 'fas fa-tools',
      info: ['Git', 'Docker', 'AWS']
    }
  ]
}))

describe('Skills.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Skills, {
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

  it('displays the skills title', () => {
    expect(wrapper.find('.title').text()).toBe('skills.')
  })

  it('renders all skill items', () => {
    const skillItems = wrapper.findAll('.skill-item')
    expect(skillItems.length).toBe(3)
  })

  it('displays skill categories correctly', () => {
    const categories = wrapper.findAll('.skill-category')
    expect(categories.at(0).text()).toBe('Languages')
    expect(categories.at(1).text()).toBe('Frameworks')
    expect(categories.at(2).text()).toBe('Tools')
  })

  it('displays skill technologies as comma-separated list', () => {
    const techs = wrapper.findAll('.skill-tech')
    expect(techs.at(0).text()).toBe('JavaScript, Python, Java')
    expect(techs.at(1).text()).toBe('Vue.js, React, Node.js')
    expect(techs.at(2).text()).toBe('Git, Docker, AWS')
  })

  it('renders skill icons', () => {
    const icons = wrapper.findAll('.skill-left i')
    expect(icons.length).toBe(3)
    expect(icons.at(0).classes()).toContain('fa-code')
    expect(icons.at(1).classes()).toContain('fa-layer-group')
    expect(icons.at(2).classes()).toContain('fa-tools')
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

  it('renders horizontal rule separator', () => {
    expect(wrapper.find('hr').exists()).toBe(true)
  })

  it('has correct skills data from info', () => {
    expect(wrapper.vm.skills.length).toBe(3)
    expect(wrapper.vm.skills[0].title).toBe('Languages')
  })
})
