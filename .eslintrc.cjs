/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true, // ✅ Node.js 환경 추가
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "@typescript-eslint/parser",
    },
    settings: {
      react: {
        version: "detect", // ✅ React 버전 자동 감지
      },
    },
    plugins: ["react", "react-hooks", "@typescript-eslint"], // ✅ v8 방식 플러그인 배열 사용
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-expressions": "off", // ✅ TypeScript 관련 불필요한 오류 제거
    },
  };
  