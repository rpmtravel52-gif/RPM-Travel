import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    // Aturan baru eslint-plugin-react-hooks v6+: diturunkan ke warning agar
    // pola useEffect + setState yang sudah berjalan tidak memblokir lint.
    rules: { 'react-hooks/set-state-in-effect': 'warn' },
  },
];
export default eslintConfig;
