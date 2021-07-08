function subdomainVisits (cpdomains: string[]): string[] {
  const subDomainVisitCountMap = new Map()
  for (let i = 0; i < cpdomains.length; i++) {
    const nextDomain = cpdomains[i]
    const [count, domain] = nextDomain.split(' ')
    const domains = domain.split('.')
    for (let i = 0; i < domains.length; i++) {
      const nextDomain = domains.slice(i, domains.length).join('.')
      if (subDomainVisitCountMap.has(nextDomain)) {
        subDomainVisitCountMap.set(nextDomain, (subDomainVisitCountMap.get(nextDomain) + parseInt(count)))
      } else {
        subDomainVisitCountMap.set(nextDomain, +count)
      }
    }
  }
  const result = []
  for (const [k, v] of subDomainVisitCountMap) {
    result.push(`${v} ${k}`)
  }
  return result
};

console.log(subdomainVisits(['9001 discuss.leetcode.com']))
