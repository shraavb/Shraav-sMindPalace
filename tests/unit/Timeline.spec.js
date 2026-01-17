import { shallowMount } from '@vue/test-utils'
import Timeline from '@/components/helpers/Timeline.vue'

describe('Timeline.vue', () => {
  let wrapper
  const mockData = {
    title: 'education',
    data: [
      {
        name: 'Test University',
        place: 'New York, NY',
        degree: 'B.S. Computer Science',
        date: '2020-2024',
        gpa: '3.9',
        description: 'Studied computer science. Worked on research projects.',
        skills: ['Python', 'Machine Learning', 'Data Science']
      },
      {
        name: 'Another University',
        position: 'Research Assistant',
        date: '2019-2020',
        description: 'Conducted research.',
        skills: ['Research', 'Analysis']
      }
    ]
  }

  beforeEach(() => {
    wrapper = shallowMount(Timeline, {
      propsData: {
        data: mockData,
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

  it('displays the section title', () => {
    expect(wrapper.find('.title1').text()).toBe('education')
  })

  it('renders all timeline entries', () => {
    const entries = wrapper.findAll('ul.timeline')
    expect(entries.length).toBe(2)
  })

  it('displays entry names correctly', () => {
    const names = wrapper.findAll('.title2')
    expect(names.at(0).text()).toContain('Test University')
    expect(names.at(1).text()).toContain('Another University')
  })

  it('displays location when place is provided', () => {
    const locationText = wrapper.find('.location-text')
    expect(locationText.exists()).toBe(true)
    expect(locationText.text()).toContain('New York, NY')
  })

  it('displays degree or position correctly', () => {
    const details = wrapper.findAll('.title3')
    expect(details.at(0).text()).toContain('B.S. Computer Science')
    expect(details.at(1).text()).toContain('Research Assistant')
  })

  it('displays GPA when provided', () => {
    const details = wrapper.findAll('.title3')
    expect(details.at(0).text()).toContain('3.9')
  })

  it('displays dates correctly', () => {
    const dates = wrapper.findAll('.date')
    expect(dates.at(0).text()).toBe('2020-2024')
    expect(dates.at(1).text()).toBe('2019-2020')
  })

  it('renders skill badges', () => {
    const badges = wrapper.findAll('.badge')
    expect(badges.length).toBe(5) // 3 + 2 skills
  })

  it('displays skill badge text correctly', () => {
    const badges = wrapper.findAll('.badge')
    expect(badges.at(0).text()).toBe('Python')
    expect(badges.at(1).text()).toBe('Machine Learning')
    expect(badges.at(2).text()).toBe('Data Science')
  })

  it('formats description with bullet points for multiple sentences', () => {
    const formatted = wrapper.vm.formatDescription('First sentence. Second sentence.')
    expect(formatted).toContain('<ul class="desc-bullets">')
    expect(formatted).toContain('<li>')
  })

  it('returns plain description for single sentence', () => {
    const formatted = wrapper.vm.formatDescription('Single sentence without period at end')
    expect(formatted).toBe('Single sentence without period at end')
  })

  it('returns empty string for empty description', () => {
    const formatted = wrapper.vm.formatDescription('')
    expect(formatted).toBe('')
  })

  it('returns empty string for null description', () => {
    const formatted = wrapper.vm.formatDescription(null)
    expect(formatted).toBe('')
  })

  it('applies dark mode class to badges when nightMode is true', async () => {
    await wrapper.setProps({ nightMode: true })
    const badges = wrapper.findAll('.badge')
    badges.wrappers.forEach(badge => {
      expect(badge.classes()).toContain('bg-dark2')
    })
  })

  it('renders location icon', () => {
    const locationIcon = wrapper.find('.fa-map-marker-alt')
    expect(locationIcon.exists()).toBe(true)
  })
})
