import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/helpers/Logo.vue'

// Mock the info module - Logo.vue imports from '../../../info' relative to its location
// We need to use the resolved path from the component
jest.mock('../../info', () => ({
  logo_name: 'TestLogo'
}))

describe('Logo.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Logo, {
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

  it('renders the logo container', () => {
    expect(wrapper.find('.logo-div').exists()).toBe(true)
  })

  it('displays the logo name from info', () => {
    expect(wrapper.find('.logo-title-name').text()).toBe('TestLogo')
  })

  it('displays the dot', () => {
    expect(wrapper.find('.logo-title-dot').text()).toBe('.')
  })

  it('applies light mode class to name when nightMode is false', () => {
    const nameSpan = wrapper.find('.logo-title-name')
    expect(nameSpan.classes()).toContain('pgray')
    expect(nameSpan.classes()).not.toContain('text-light')
  })

  it('applies dark mode class to name when nightMode is true', async () => {
    await wrapper.setProps({ nightMode: true })
    const nameSpan = wrapper.find('.logo-title-name')
    expect(nameSpan.classes()).toContain('text-light')
    expect(nameSpan.classes()).not.toContain('pgray')
  })

  it('dot has pblue class', () => {
    const dotSpan = wrapper.find('.logo-title-dot')
    expect(dotSpan.classes()).toContain('pblue')
  })

  it('has correct data properties', () => {
    expect(wrapper.vm.name).toBe('TestLogo')
    expect(wrapper.vm.dot).toBe('.')
  })
})
