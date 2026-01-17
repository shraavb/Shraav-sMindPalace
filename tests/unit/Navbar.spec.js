import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

// Mock the info module
jest.mock('../../info', () => ({
  config: {
    navbar: {
      blur: true
    }
  }
}))

// Mock the Logo component
const LogoStub = {
  name: 'Logo',
  template: '<div class="logo-stub"></div>',
  props: ['nightMode']
}

describe('Navbar.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Navbar, {
      propsData: {
        nightMode: false
      },
      stubs: {
        Logo: LogoStub
      },
      directives: {
        tooltip: () => {}
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the navbar element', () => {
    expect(wrapper.find('nav.navbar').exists()).toBe(true)
  })

  it('renders the Logo component', () => {
    expect(wrapper.findComponent(LogoStub).exists()).toBe(true)
  })

  it('renders navigation links', () => {
    const navLinks = wrapper.findAll('.nav-link')
    expect(navLinks.length).toBe(4) // about, skills, portfolio, night mode toggle
  })

  it('applies light mode classes when nightMode is false', () => {
    expect(wrapper.find('.bg-white').exists()).toBe(true)
    expect(wrapper.find('.bg-dark2').exists()).toBe(false)
  })

  it('applies dark mode classes when nightMode is true', async () => {
    await wrapper.setProps({ nightMode: true })
    expect(wrapper.find('.bg-dark2').exists()).toBe(true)
    expect(wrapper.find('.bg-white').exists()).toBe(false)
  })

  it('emits scroll event when about link is clicked', async () => {
    const aboutLink = wrapper.findAll('.nav-link').at(0)
    await aboutLink.trigger('click')
    expect(wrapper.emitted('scroll')).toBeTruthy()
    expect(wrapper.emitted('scroll')[0][0]).toBe('about')
  })

  it('emits scroll event when skills link is clicked', async () => {
    const skillsLink = wrapper.findAll('.nav-link').at(1)
    await skillsLink.trigger('click')
    expect(wrapper.emitted('scroll')).toBeTruthy()
    expect(wrapper.emitted('scroll')[0][0]).toBe('skills')
  })

  it('emits scroll event when portfolio link is clicked', async () => {
    const portfolioLink = wrapper.findAll('.nav-link').at(2)
    await portfolioLink.trigger('click')
    expect(wrapper.emitted('scroll')).toBeTruthy()
    expect(wrapper.emitted('scroll')[0][0]).toBe('portfolio')
  })

  it('emits nightMode event when mode toggle is clicked', async () => {
    const modeToggle = wrapper.findAll('.nav-link').at(3)
    await modeToggle.trigger('click')
    expect(wrapper.emitted('nightMode')).toBeTruthy()
    expect(wrapper.emitted('nightMode')[0][0]).toBe(true)
  })

  it('toggles nightMode state correctly', async () => {
    const modeToggle = wrapper.findAll('.nav-link').at(3)
    await modeToggle.trigger('click')
    expect(wrapper.vm.localNightMode).toBe(true)
    await modeToggle.trigger('click')
    expect(wrapper.vm.localNightMode).toBe(false)
  })

  it('emits scroll event when brand logo is clicked', async () => {
    const brand = wrapper.find('.navbar-brand')
    await brand.trigger('click')
    expect(wrapper.emitted('scroll')).toBeTruthy()
    expect(wrapper.emitted('scroll')[0][0]).toBe('home')
  })

  it('shows moon icon for night mode toggle', () => {
    const moonIcon = wrapper.find('.nav-link i')
    expect(moonIcon.classes()).toContain('fa-moon')
  })

  it('applies blur class when configured', () => {
    expect(wrapper.find('.navbar-blur').exists()).toBe(true)
  })
})
