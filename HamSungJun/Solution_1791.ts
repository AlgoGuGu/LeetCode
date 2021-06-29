function findCenter (edges: number[][]): number {
/**
 * 첫번째 엣지의 숫자들을 Set에 매겨놓고
 * 두번째 엣지에서 다시 등장한 버텍스가
 * 반드시 중점 버텍스가 된다.
 */
  const set = new Set(edges[0])
  const [u, v] = edges[1]
  return set.has(u) ? u : v
};
