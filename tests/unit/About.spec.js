import { shallowMount } from '@vue/test-utils'
import About from '@/components/About.vue'

// Mock the info module
jest.mock('../../info', () => ({
  education: [
    {
      name: 'Test University',
      degree: 'B.S. Computer Science',
      date: '2020-2024',
      gpa: '3.9',
      description: 'Test description'
    }
  ],
  experience: [
    {
      name: 'Test Company',
      position: 'Software Engineer',
      date: '2023-Present',
      description: 'Working on cool projects'
    }
  ]
}))

// Mock the Timeline component
const TimelineStub = {
  name: 'Timeline',
  template: '<div class="timeline-stub"><slot></slot></div>',
  props: ['data', 'nightMode']
}

describe('About.vue', () => {
  let wrapper
  let consoleSpy

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    wrapper = shallowMount(About, {
      propsData: {
        nightMode: false
      },
      stubs: {
        Timeline: TimelineStub
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
    consoleSpy.mockRestore()
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the about me title', () => {
    expect(wrapper.find('.title').text()).toBe('about me.')
  })

  it('renders two Timeline components (education and experience)', () => {
    const timelines = wrapper.findAllComponents(TimelineStub)
    expect(timelines.length).toBe(2)
  })

  it('passes education data to first Timeline', () => {
    const timelines = wrapper.findAllComponents(TimelineStub)
    const educationTimeline = timelines.at(0)
    expect(educationTimeline.props('data').title).toBe('education')
    expect(educationTimeline.props('data').data.length).toBe(1)
    expect(educationTimeline.props('data').data[0].name).toBe('Test University')
  })

  it('passes experience data to second Timeline', () => {
    const timelines = wrapper.findAllComponents(TimelineStub)
    const experienceTimeline = timelines.at(1)
    expect(experienceTimeline.props('data').title).toBe('experiences')
    expect(experienceTimeline.props('data').data.length).toBe(1)
    expect(experienceTimeline.props('data').data[0].name).toBe('Test Company')
  })

  it('passes nightMode prop to Timeline components', () => {
    const timelines = wrapper.findAllComponents(TimelineStub)
    timelines.wrappers.forEach(timeline => {
      expect(timeline.props('nightMode')).toBe(false)
    })
  })

  it('applies light mode classes when nightMode is false', () => {
    expect(wrapper.find('.bg-white').exists()).toBe(true)
    expect(wrapper.find('.bg-dark2').exists()).toBe(false)
  })

  it('applies dark mode classes when nightMode is true', async () => {
    await wrapper.setProps({ nightMode: true })
    expect(wrapper.find('.bg-dark2').exists()).toBe(true)
    expect(wrapper.find('.bg-white').exists()).toBe(false)
    expect(wrapper.find('.text-light').exists()).toBe(true)
  })

  it('renders horizontal rule separator', () => {
    expect(wrapper.find('hr').exists()).toBe(true)
  })

  it('has correct education data structure', () => {
    expect(wrapper.vm.education.title).toBe('education')
    expect(Array.isArray(wrapper.vm.education.data)).toBe(true)
  })

  it('has correct experience data structure', () => {
    expect(wrapper.vm.experience.title).toBe('experiences')
    expect(Array.isArray(wrapper.vm.experience.data)).toBe(true)
  })
})
