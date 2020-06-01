//checking how many hours of sleep user got each night of the week
const getSleepHours = day => {
    switch(day){
      case 'Monday':
        return 7;
      case 'Tuesday':
        return 7;
      case 'Wednesday':
        return 10;
      case 'Thursday':
        return 9;
      case 'Friday':
        return 7;
      case 'Saturday':
        return 7;
      case 'Sunday':
        return 7;
    }
  };
  
  //getting total sleep hours that user actually slept for whole week
  const getActualSleepHours = () =>{
    return getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
  };
  
  //getting ideal sleep hours per day that user prefers, multiplying them by 7 as we need to count all days
  const getIdealSleepHours = () =>{
    let idealHours = 8;
    return idealHours*7;
  };
  
  // console.log("getActual " + getActualSleepHours());
  // console.log("getIdeal " + getIdealSleepHours());

  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours){
      console.log(`You have got ${actualSleepHours} hours of sleep this week, it is a perfect amount.`);
    }
    if(actualSleepHours > idealSleepHours){
      console.log(`You have got ${actualSleepHours - idealSleepHours} hours more sleep than you needed this week.`);
    }
    if(actualSleepHours < idealSleepHours){
      console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than you needed this week. Get some rest.`);
    }
  };

calculateSleepDebt();