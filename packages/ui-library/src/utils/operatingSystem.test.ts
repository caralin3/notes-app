import { convertToOSLabel, getOS } from './operatingSystem';

describe('Operating System Detection', () => {
  beforeAll(() => {
    // Mock the userAgentData property
    Object.defineProperty(
      window.navigator,
      'userAgentData',
      ((value) => ({
        get() {
          return value;
        },
        set(v) {
          value = v;
        },
      }))((window.navigator as any).userAgentData),
    );
  });

  afterAll(() => {
    // Restore the original userAgentData property
    () =>
      Object.defineProperty(
        window.navigator,
        'userAgentData',
        ((value) => ({
          get() {
            return value;
          },
          set(v) {
            value = v;
          },
        }))((window.navigator as any).userAgentData),
      );
  });

  describe('getOs', () => {
    test('should return "Windows" for Windows OS', () => {
      (global.navigator as any).userAgentData = { platform: 'win' };
      expect(getOS()).toBe('Windows');
    });

    test('should return "Mac" for Mac OS', () => {
      (global.navigator as any).userAgentData = { platform: 'mac' };
      expect(getOS()).toBe('Mac');
    });

    test('should return "Android" for Android OS', () => {
      (global.navigator as any).userAgentData = { platform: 'android' };
      expect(getOS()).toBe('Android');
    });

    test('should return "iOS" for iOS OS', () => {
      (global.navigator as any).userAgentData = { platform: 'iphone' };
      expect(getOS()).toBe('iOS');
    });

    test('should return "Linux" for Linux OS', () => {
      (global.navigator as any).userAgentData = { platform: 'linux' };
      expect(getOS()).toBe('Linux');
    });

    test('should return "Unknown OS" for unknown OS', () => {
      (global.navigator as any).userAgentData = { platform: 'unknown' };
      expect(getOS()).toBe('Unknown OS');
    });
  });

  describe('convertToOSLabel', () => {
    describe('Windows OS', () => {
      beforeAll(() => {
        (global.navigator as any).userAgentData = { platform: 'win' };
      });

      test('should convert copy shortcut', () => {
        const result = convertToOSLabel('Cmd + C');
        expect(result).toBe('Ctrl + C');
      });

      test('should convert new folder shortcut', () => {
        const result = convertToOSLabel('Cmd + Shift + N');
        expect(result).toBe('Ctrl + Shift + N');
      });

      test('should convert opt shortcut', () => {
        const result = convertToOSLabel('Opt + N');
        expect(result).toBe('Alt + N');
      });
    });

    describe('Mac OS', () => {
      beforeAll(() => {
        (global.navigator as any).userAgentData = { platform: 'mac' };
      });

      test('should convert copy shortcut', () => {
        const result = convertToOSLabel('Ctrl + C');
        expect(result).toBe('⌘C');
      });

      test('should convert new folder shortcut', () => {
        const result = convertToOSLabel('Ctrl + Shift + N');
        expect(result).toBe('⌘⇧N');
      });

      test('should convert opt shortcut', () => {
        const result = convertToOSLabel('Opt + N');
        expect(result).toBe('⌥N');
      });

      test('should convert alt shortcut', () => {
        const result = convertToOSLabel('Alt + N');
        expect(result).toBe('⌥N');
      });
    });

    describe('Linux', () => {
      beforeAll(() => {
        (global.navigator as any).userAgentData = { platform: 'linux' };
      });

      test('should convert copy shortcut', () => {
        const result = convertToOSLabel('Cmd + C');
        expect(result).toBe('Cmd + C');
      });
    });
  });
});
