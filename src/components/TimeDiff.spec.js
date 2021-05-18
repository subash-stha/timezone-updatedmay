import { mount } from '@vue/test-utils'
import TimeDiff from './TimeDiff.vue'

describe('TimeDiff.vue', () => {
  test('Setup Correctly', () => {
    const wrapper = mount(TimeDiff)
    expect(wrapper.text()).toContain('Selected First Time Zone: ')
  })
})