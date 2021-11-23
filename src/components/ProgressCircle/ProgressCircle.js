export const cleanPercentage = (percentage) => {
  const isNegativeOrNan = !Number.isFinite(+percentage) || percentage;
  const isTooHigh = percentage > 100;
  return isNegativeOrNan ? 0 : isTooHigh ? 100 : +percentage;
};

export const Circle = ({ colour, percentage }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where storked
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill='transparent'
      stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
      strokeWidth={'2rem'}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x='50%'
      y='50%'
      dominantBaseLine='central'
      textAnchor='middle'
      fontSize={'1.5em'}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

export const Pie = ({ percentage, colour, label }) => {
  const pct = cleanPercentage(percentage);
  return (
    <>
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${'100 100'})`}>
          <Circle colour='lightgrey' />
          <Circle colour={colour} percentage={pct} />
        </g>
        <Text percentage={pct} />
      </svg>
      <p>{label}</p>
    </>
  );
};
