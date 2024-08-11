const Degree = ({ temp }: { temp: number }): JSX.Element => (
  <>
    <span>
      {temp}
      <sup>°C</sup>
    </span>
  </>
)

export default Degree
