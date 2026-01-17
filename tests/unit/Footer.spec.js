import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

// Mock the info module
jest.mock('../../info', () => ({
  links: {
    linkedin: 'https://linkedin.com/in/test',
    github: 'https://github.com/test'
  }
}))

describe('Footer.vue', () => {
  let wrapper
  let windowOpenSpy

  beforeEach(() => {
    windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => {})
    wrapper = shallowMount(Footer)
  })

  afterEach(() => {
    wrapper.destroy()
    windowOpenSpy.mockRestore()
  })

  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the footer with gradient class', () => {
    expect(wrapper.find('.footer-gradient').exists()).toBe(true)
  })

  it('displays the copyright text', () => {
    const copyrightText = wrapper.find('span')
    expect(copyrightText.text()).toContain('2024 Copyright')
    expect(copyrightText.text()).toContain('Shraavasti Bhat')
  })

  it('renders three social buttons', () => {
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(3)
  })

  it('renders LinkedIn button with correct icon', () => {
    const linkedinIcon = wrapper.find('.fa-linkedin')
    expect(linkedinIcon.exists()).toBe(true)
  })

  it('renders GitHub button with correct icon', () => {
    const githubIcon = wrapper.find('.fa-github')
    expect(githubIcon.exists()).toBe(true)
  })

  it('renders Resume button with correct icon', () => {
    const resumeIcon = wrapper.find('.fa-file')
    expect(resumeIcon.exists()).toBe(true)
  })

  it('opens LinkedIn when LinkedIn button is clicked', async () => {
    const buttons = wrapper.findAll('button')
    await buttons.at(0).trigger('click')
    expect(windowOpenSpy).toHaveBeenCalledWith('https://linkedin.com/in/test', '_blank')
  })

  it('opens GitHub when GitHub button is clicked', async () => {
    const buttons = wrapper.findAll('button')
    await buttons.at(1).trigger('click')
    expect(windowOpenSpy).toHaveBeenCalledWith('https://github.com/test', '_blank')
  })

  it('emits showResume event when Resume button is clicked', async () => {
    const buttons = wrapper.findAll('button')
    await buttons.at(2).trigger('click')
    expect(wrapper.emitted('showResume')).toBeTruthy()
  })

  it('has correct data properties from info', () => {
    expect(wrapper.vm.linkedin).toBe('https://linkedin.com/in/test')
    expect(wrapper.vm.github).toBe('https://github.com/test')
  })
})
