function decode (encoded: number[], first: number): number[] {
  const decoded = new Array(encoded.length + 1)
  decoded[0] = first
  for (let i = 1; i < decoded.length; i++) {
    decoded[i] = decoded[i - 1] ^ encoded[i - 1]
  }
  return decoded
};
