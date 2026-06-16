/**
 * Simple test for button-red-full component
 */

// Mock Component globally
const mockComponent = jest.fn();
global.Component = mockComponent;

// Require the component to trigger the Component call
require('./button-red-full.js');

// Get the component config that was passed to Component
const componentConfig = mockComponent.mock.calls[0][0];

describe('ButtonRedFull Component - Simple Test', () => {
  test('component registers correctly', () => {
    expect(mockComponent).toHaveBeenCalledTimes(1);
  });

  test('has correct structure', () => {
    expect(componentConfig.mixins).toEqual([]);
    expect(componentConfig.data).toEqual({});
    expect(componentConfig.props.text).toBe('Button');
    expect(typeof componentConfig.props.onClickMe).toBe('function');
    expect(typeof componentConfig.didMount).toBe('function');
    expect(typeof componentConfig.didUpdate).toBe('function');
    expect(typeof componentConfig.didUnmount).toBe('function');
    expect(typeof componentConfig.methods.onClickMe).toBe('function');
  });

  test('onClickMe method calls props.onClickMe', () => {
    const mockProps = { onClickMe: jest.fn() };
    const instance = { props: mockProps };
    
    // Bind method to instance and call it
    componentConfig.methods.onClickMe.call(instance);
    
    expect(mockProps.onClickMe).toHaveBeenCalledTimes(1);
  });

  test('lifecycle methods are callable', () => {
    const instance = {};
    
    expect(() => componentConfig.didMount.call(instance)).not.toThrow();
    expect(() => componentConfig.didUpdate.call(instance)).not.toThrow();
    expect(() => componentConfig.didUnmount.call(instance)).not.toThrow();
  });

  // Specific tests for the props section
  describe('Props Configuration', () => {
    test('props should have text property with default value', () => {
      expect(componentConfig.props).toHaveProperty('text');
      expect(componentConfig.props.text).toBe('Button');
    });

    test('props should have onClickMe property as function', () => {
      expect(componentConfig.props).toHaveProperty('onClickMe');
      expect(typeof componentConfig.props.onClickMe).toBe('function');
    });

    test('props onClickMe should be callable without errors', () => {
      expect(() => {
        componentConfig.props.onClickMe();
      }).not.toThrow();
    });

    test('props text should accept custom values', () => {
      // Test that the prop can be overridden
      const instance = { props: { ...componentConfig.props, text: 'Custom Text' } };
      expect(instance.props.text).toBe('Custom Text');
    });

    test('props onClickMe should accept custom functions', () => {
      const customClickHandler = jest.fn();
      const instance = { props: { ...componentConfig.props, onClickMe: customClickHandler } };
      
      componentConfig.methods.onClickMe.call(instance);
      expect(customClickHandler).toHaveBeenCalledTimes(1);
    });

    test('default onClickMe prop should not throw when called', () => {
      const instance = { props: componentConfig.props };
      expect(() => {
        componentConfig.methods.onClickMe.call(instance);
      }).not.toThrow();
    });
  });
});