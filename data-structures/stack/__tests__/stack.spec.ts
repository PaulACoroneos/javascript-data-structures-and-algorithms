import Stack from '../stack'

describe('stack', () => {
  test('If I push an item on the stack and peek the value is there as expected', () => {
    const stack = new Stack();
    stack.push('test');
    expect(stack.peek()).toBe('test');
  })

  test('If I push an item on the stack and then pop it off the stack is empty', () => {
    const stack = new Stack();
    stack.push('test');
    expect(stack.peek()).toBe('test');
    stack.pop();
    expect(stack.peek()).toBe(undefined);
  })
})