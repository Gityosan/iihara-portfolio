import {
  toSnakeCase,
  toLowerCamelCase,
  toUpperCamelCase,
  convertKeyToSnakeCase,
  convertKeyToLowerCamelCase,
  convertKeyToUpperCamelCase,
} from '@/utils/string-case';

describe('String and Object Key Conversion Functions', () => {
  describe('String conversion functions', () => {
    it('converts to snake_case correctly', () => {
      expect(toSnakeCase('testString')).toBe('test_string');
      expect(toSnakeCase('TestString')).toBe('test_string');
      expect(toSnakeCase('test-string')).toBe('test_string');
    });

    it('converts to lowerCamelCase correctly', () => {
      expect(toLowerCamelCase('TestString')).toBe('testString');
      expect(toLowerCamelCase('testString')).toBe('testString');
      expect(toLowerCamelCase('test_string')).toBe('testString');
      expect(toLowerCamelCase('Test-String')).toBe('testString');
    });

    it('converts to UpperCamelCase correctly', () => {
      expect(toUpperCamelCase('TestString')).toBe('TestString');
      expect(toUpperCamelCase('testString')).toBe('TestString');
      expect(toUpperCamelCase('test_string')).toBe('TestString');
      expect(toUpperCamelCase('test-string')).toBe('TestString');
    });

    it('converts distorted word to snake_case correctly', () => {
      expect(toSnakeCase('test_String')).toBe('test_string');
      expect(toSnakeCase('Test_String')).toBe('test_string');
      expect(toSnakeCase('test-String')).toBe('test_string');
      expect(toSnakeCase('Test-String')).toBe('test_string');
      expect(toSnakeCase('distorted_test-string')).toBe('distorted_test_string');
      expect(toSnakeCase('Distorted-Test_String')).toBe('distorted_test_string');
      expect(toSnakeCase('2DistortedTest_String')).toBe('2distorted_test_string');
      expect(toSnakeCase('Distorted2Test_String')).toBe('distorted2test_string');
    });

    it('converts distorted word to lowerCamelCase correctly', () => {
      expect(toLowerCamelCase('test_String')).toBe('testString');
      expect(toLowerCamelCase('Test_String')).toBe('testString');
      expect(toLowerCamelCase('test-String')).toBe('testString');
      expect(toLowerCamelCase('Test-String')).toBe('testString');
      expect(toLowerCamelCase('distorted_test-string')).toBe('distortedTestString');
      expect(toLowerCamelCase('Distorted-Test_String')).toBe('distortedTestString');
      expect(toLowerCamelCase('2distortedTest_String')).toBe('2distortedTestString');
    });

    it('converts distorted word to UpperCamelCase correctly', () => {
      expect(toUpperCamelCase('test_String')).toBe('TestString');
      expect(toUpperCamelCase('Test_String')).toBe('TestString');
      expect(toUpperCamelCase('test-String')).toBe('TestString');
      expect(toUpperCamelCase('Test-String')).toBe('TestString');
      expect(toUpperCamelCase('distorted_test-string')).toBe('DistortedTestString');
      expect(toUpperCamelCase('Distorted-Test_String')).toBe('DistortedTestString');
      expect(toUpperCamelCase('2distortedTest_String')).toBe('2distortedTestString');
    });
  });

  describe('Object key conversion functions', () => {
    const testObj = {
      testKey: 'value',
      'another-key': { nestedKey: 'nestedValue', 'nested-key-two': 'value2' },
      'array-test': [{ arrayKey: 'arrayValue' }],
    };

    it('converts object keys to snake_case correctly', () => {
      const snakeCaseObj = convertKeyToSnakeCase(testObj);
      expect(snakeCaseObj).toEqual({
        test_key: 'value',
        another_key: { nested_key: 'nestedValue', nested_key_two: 'value2' },
        array_test: [{ array_key: 'arrayValue' }],
      });
      expect(convertKeyToSnakeCase(null)).toEqual({});
      expect(convertKeyToSnakeCase(undefined)).toEqual({});
    });

    it('converts object keys to lowerCamelCase correctly', () => {
      const lowerCamelCaseObj = convertKeyToLowerCamelCase(testObj);
      expect(lowerCamelCaseObj).toEqual({
        testKey: 'value',
        anotherKey: { nestedKey: 'nestedValue', nestedKeyTwo: 'value2' },
        arrayTest: [{ arrayKey: 'arrayValue' }],
      });
      expect(convertKeyToLowerCamelCase(null)).toEqual({});
      expect(convertKeyToLowerCamelCase(undefined)).toEqual({});
    });

    it('converts object keys to UpperCamelCase correctly', () => {
      const upperCamelCaseObj = convertKeyToUpperCamelCase(testObj);
      expect(upperCamelCaseObj).toEqual({
        TestKey: 'value',
        AnotherKey: { NestedKey: 'nestedValue', NestedKeyTwo: 'value2' },
        ArrayTest: [{ ArrayKey: 'arrayValue' }],
      });
      expect(convertKeyToUpperCamelCase(null)).toEqual({});
      expect(convertKeyToUpperCamelCase(undefined)).toEqual({});
    });
  });
});
