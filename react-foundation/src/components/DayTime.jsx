const DayTime = ({timeOfDay}) => {
  return timeOfDay === "morning" ? (<p>Good Morning!</p>) : (<p>Good Afternoon!</p>)
}

export default DayTime