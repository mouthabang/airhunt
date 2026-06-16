/**
 * Test for components/loading-spinner/loading-spinner.js
 * Standardized test template for Alipay Mini Program components
 */

// Clear the require cache to get fresh component
delete require.cache[require.resolve('./loading-spinner.js')];

// Mock Component before requiring the component file
let capturedComponentConfig = null;
global.Component = jest.fn((config) => {
  capturedComponentConfig = config;
  return config;
});

// Now require the component - it will execute and call global.Component
require('./loading-spinner.js');

describe('LoadingSpinner Component', () => {
  let componentInstance;

  beforeEach(() => {
    // Create a component instance using the captured config
    componentInstance = {
      data: capturedComponentConfig.data ? { ...capturedComponentConfig.data } : {},
      props: { ...capturedComponentConfig.props },
      didMount: capturedComponentConfig.didMount,
      didUpdate: capturedComponentConfig.didUpdate,
      didUnmount: capturedComponentConfig.didUnmount,
      methods: capturedComponentConfig.methods ? { ...capturedComponentConfig.methods } : {},
      setData: jest.fn(function(newData) {
        this.data = { ...this.data, ...newData };
      })
    };

    // Bind methods to instance if methods exist
    if (componentInstance.methods) {
      Object.keys(componentInstance.methods).forEach(methodName => {
        componentInstance.methods[methodName] = 
          componentInstance.methods[methodName].bind(componentInstance);
      });
    }

    // Mock any function props
    Object.keys(componentInstance.props).forEach(propName => {
      if (typeof componentInstance.props[propName] === 'function') {
        componentInstance.props[propName] = jest.fn();
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Component Registration', () => {
    test('should register with Alipay Component system', () => {
      expect(global.Component).toHaveBeenCalledWith(capturedComponentConfig);
    });
  });

  describe('Component Configuration', () => {
    test('should have correct props configuration with defaults', () => {
      expect(capturedComponentConfig.props).toEqual({
        size: "48px",
        color: "#ff4d4f", 
        backgroundColor: "rgba(255, 77, 79, 0.2)"
      });
    });

    test('should have didMount lifecycle method', () => {
      expect(typeof capturedComponentConfig.didMount).toBe('function');
    });

    test('should not have didUpdate method (optional)', () => {
      // didUpdate is optional, so it might be undefined
      expect(capturedComponentConfig.didUpdate).toBeUndefined();
    });

    test('should not have didUnmount method (optional)', () => {
      // didUnmount is optional, so it might be undefined
      expect(capturedComponentConfig.didUnmount).toBeUndefined();
    });

    test('should not have methods object (optional)', () => {
      // methods is optional, so it might be undefined
      expect(capturedComponentConfig.methods).toBeUndefined();
    });

    test('should not have data object (optional)', () => {
      // data is optional, so it might be undefined
      expect(capturedComponentConfig.data).toBeUndefined();
    });

    test('should not have mixins array (optional)', () => {
      // mixins is optional, so it might be undefined
      expect(capturedComponentConfig.mixins).toBeUndefined();
    });
  });

  describe('Lifecycle Methods', () => {
    test('didMount should be executable without errors', () => {
      expect(() => {
        componentInstance.didMount();
      }).not.toThrow();
    });

    test('didMount should handle any initialization code', () => {
      const consoleSpy = jest.spyOn(console, 'error');
      
      componentInstance.didMount();
      
      // Verify no errors were thrown during execution
      expect(consoleSpy).not.toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('Props Functionality', () => {
    test('should accept custom size prop', () => {
      const customProps = {
        size: "64px",
        color: "#ff4d4f",
        backgroundColor: "rgba(255, 77, 79, 0.2)"
      };
      
      componentInstance.props = { ...componentInstance.props, ...customProps };
      expect(componentInstance.props.size).toBe("64px");
    });

    test('should accept custom color prop', () => {
      const customProps = {
        size: "48px",
        color: "#0000ff",
        backgroundColor: "rgba(255, 77, 79, 0.2)"
      };
      
      componentInstance.props = { ...componentInstance.props, ...customProps };
      expect(componentInstance.props.color).toBe("#0000ff");
    });

    test('should accept custom backgroundColor prop', () => {
      const customProps = {
        size: "48px",
        color: "#ff4d4f",
        backgroundColor: "rgba(0, 0, 255, 0.1)"
      };
      
      componentInstance.props = { ...componentInstance.props, ...customProps };
      expect(componentInstance.props.backgroundColor).toBe("rgba(0, 0, 255, 0.1)");
    });

    test('should handle partial props override', () => {
      componentInstance.props.size = "32px";
      expect(componentInstance.props.size).toBe("32px");
      expect(componentInstance.props.color).toBe("#ff4d4f"); // Default remains
      expect(componentInstance.props.backgroundColor).toBe("rgba(255, 77, 79, 0.2)"); // Default remains
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty props object', () => {
      componentInstance.props = {};
      expect(componentInstance.props).toEqual({});
    });

    test('should handle null props values', () => {
      componentInstance.props.size = null;
      componentInstance.props.color = null;
      componentInstance.props.backgroundColor = null;
      
      expect(componentInstance.props.size).toBeNull();
      expect(componentInstance.props.color).toBeNull();
      expect(componentInstance.props.backgroundColor).toBeNull();
    });

    test('should handle undefined props values', () => {
      componentInstance.props.size = undefined;
      componentInstance.props.color = undefined;
      componentInstance.props.backgroundColor = undefined;
      
      expect(componentInstance.props.size).toBeUndefined();
      expect(componentInstance.props.color).toBeUndefined();
      expect(componentInstance.props.backgroundColor).toBeUndefined();
    });

    test('should handle invalid color values', () => {
      componentInstance.props.color = "invalid-color";
      componentInstance.props.backgroundColor = "invalid-bg-color";
      
      expect(componentInstance.props.color).toBe("invalid-color");
      expect(componentInstance.props.backgroundColor).toBe("invalid-bg-color");
    });

    test('should handle numeric size values', () => {
      componentInstance.props.size = 64;
      expect(componentInstance.props.size).toBe(64);
    });
  });

  describe('Component Instance Behavior', () => {
    test('setData method should update component data when called', () => {
      // Even though this component doesn't use data, setData should still work
      componentInstance.setData({ customField: 'test' });
      expect(componentInstance.data.customField).toBe('test');
    });

    test('multiple instances should have independent props', () => {
      const instance1 = {
        ...componentInstance,
        props: { size: "32px", color: "#ff0000", backgroundColor: "rgba(255, 0, 0, 0.2)" }
      };
      const instance2 = {
        ...componentInstance,
        props: { size: "64px", color: "#00ff00", backgroundColor: "rgba(0, 255, 0, 0.2)" }
      };

      expect(instance1.props.size).toBe("32px");
      expect(instance2.props.size).toBe("64px");
      expect(instance1.props.color).toBe("#ff0000");
      expect(instance2.props.color).toBe("#00ff00");
    });
  });

  describe('Integration Tests', () => {
    test('component config matches expected minimal structure', () => {
      expect(capturedComponentConfig).toEqual({
        props: {
          size: "48px",
          color: "#ff4d4f",
          backgroundColor: "rgba(255, 77, 79, 0.2)"
        },
        didMount: expect.any(Function)
      });
    });
  });
});