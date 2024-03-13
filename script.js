if (document.readyState !== 'loading') {
    console.log('document is already ready, just execute code here');
    myCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('document was not ready, place code here');
        myCode();
    });
}


  function myCode(){

    const genderPage = document.getElementById('gender-page');
    const agePage = document.getElementById('age-page');
    const heightPage = document.getElementById('height-page');
    const weightPage = document.getElementById('weight-page');
    const resultPage = document.getElementById('result-page');
  
    const genderNextBtn = document.getElementById('gender-next');
    const ageNextBtn = document.getElementById('age-next');
    const heightNextBtn = document.getElementById('height-next');
    const calculateBtn = document.getElementById('calculate');
    const saveNowBtn = document.getElementById('save-now');
  
    const bmiResult = document.getElementById('bmi-result');
    const calories = document.getElementById('calories');
    const dietChart = document.getElementById('diet-chart');
  
    let gender, age, height, weight;
  
    genderNextBtn.addEventListener('click', function () {
      gender = document.getElementById('gender').value;
      genderPage.classList.remove('active');
      agePage.classList.add('active');
    });
  
    ageNextBtn.addEventListener('click', function () {
      age = parseFloat(document.getElementById('age').value);
      if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age.');
        return;
      }
      agePage.classList.remove('active');
      heightPage.classList.add('active');
    });
  
    heightNextBtn.addEventListener('click', function () {
      height = parseFloat(document.getElementById('height').value);
      if (isNaN(height) || height <= 0) {
        alert('Please enter a valid height.');
        return;
      }
      heightPage.classList.remove('active');
      weightPage.classList.add('active');
    });
  
    calculateBtn.addEventListener('click', function () {
      weight = parseFloat(document.getElementById('weight').value);
      if (isNaN(weight) || weight <= 0) {
        alert('Please enter a valid weight.');
        return;
      }
      const bmi = calculateBMI(height, weight);
      bmiResult.textContent = `Your BMI: ${bmi.toFixed(2)}`;
      const dailyCalories = calculateCalories(gender, weight, height, age);
      calories.textContent = `Daily Needed Calories: ${dailyCalories.toFixed(2)}`;
  
      const diet = generateDietChart(dailyCalories);
      dietChart.innerHTML = diet;
  
      weightPage.classList.remove('active');
      resultPage.classList.add('active');
    });
  
    saveNowBtn.addEventListener('click', function () {
      window.print();
    });
  
    function calculateBMI(height, weight) {
      return weight / ((height / 100) ** 2);
    }
  
    function calculateCalories(gender, weight, height, age) {
      let bmr;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      return bmr;
    }
  
    function generateDietChart(calories) {
      const breakfast = calories * 0.25;
      const lunch = calories * 0.35;
      const dinner = calories * 0.4;
  
      return `<tr><th>সময়</th><th>Calories</th></tr>
              <tr><td>সকালের নাস্তা</td><td>বিস্কুট, শক্তি টক দই, এক গ্লাস পানি</td></tr>
              <tr><td>সকালের খাবার</td><td>ডিম, রুটি, ফলমূল</td></tr>
              <tr><td>দুপুর</td><td>ভাত, মাছ/মুরগী/গরু/খাসির মাংস,ডাল,সবজি</td></tr>
              <tr><td>বিকেল</td><td>সালাদের সাথে শক্তি টক দই</td></tr>
              <tr><td>রাত</td><td>মাছ, মাংস, ভাত, ডাল, দুধ </td></tr> 
              `;

    }
  }
  