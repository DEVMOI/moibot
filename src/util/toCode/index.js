export default function toCode(codeSnippet) {
  let toCode = '```';
  const code = toCode + codeSnippet + toCode;
  return code;
}
