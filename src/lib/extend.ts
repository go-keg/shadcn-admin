const projectProfitMargin = (v: {
  partnerBudget: number
  purchasePaidAmountWithoutMerchantFee: number
}): number =>
  (v.partnerBudget - v.purchasePaidAmountWithoutMerchantFee) / v.partnerBudget

const formatNumber = (value: number, digits = 1): string => {
  const units = [
    { value: 1e12, suffix: 'T' },
    { value: 1e9, suffix: 'B' },
    { value: 1e6, suffix: 'M' },
    { value: 1e3, suffix: 'K' },
  ]

  for (const unit of units) {
    if (Math.abs(value) >= unit.value) {
      const formatted = (value / unit.value)
        .toFixed(digits)
        .replace(/\.0+$/, '')
      return `${formatted}${unit.suffix}`
    }
  }

  return value.toString()
}

const buckets = [
  { max: 1e3, label: '<1K' },
  { max: 1e4, label: '1K-10K' },
  { max: 1e5, label: '10K-100K' },
  { max: 1e6, label: '100K-1M' },
  { max: 1e7, label: '1M-10M' },
  { max: 1e8, label: '10M-100M' },
  { max: 1e9, label: '100M-1B' },
]

const formatNumberBucket = (value: number): string => {
  const abs = Math.abs(value)
  for (const bucket of buckets) {
    if (abs < bucket.max) {
      return bucket.label
    }
  }
  return '1B+'
}
