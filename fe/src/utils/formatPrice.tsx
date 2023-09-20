/**
 * 주어진 가격을 원하는 포맷으로 변환합니다.
 *
 * @param {number} price - 변환할 가격.
 * @returns {string} 변환된 가격 문자열.
 *
 * @example
 * formatPrice(0)        // '가격 없음'
 * formatPrice(5000)     // '5,000원'
 * formatPrice(23000)    // '23,000원'
 * formatPrice(1100000)  // '110만원'
 * formatPrice(200000000)// '2억원'
 * formatPrice(230000000)// '2억 3,000만원'
 */

export default function formatPrice(price: number): string {
  const billion = Math.floor(price / 100000000);
  const tenThousand = Math.floor((price % 100000000) / 10000);

  if (price === 0) return '가격 없음';
  if (billion && tenThousand)
    return `${billion}억 ${tenThousand.toLocaleString()}만원`;
  if (billion) return `${billion}억원`;
  if (price >= 1000000) return `${tenThousand}만원`;

  return `${price.toLocaleString()}원`;
}
