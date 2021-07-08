function isSubsequence (s: string, t: string): boolean {
  let ps = 0
  let pt = 0
  while (pt < t.length) {
    if (s[ps] === t[pt]) {
      ps += 1
    }
    pt += 1
  }
  return ps > s.length - 1
};
