const grades = [70, 67, 76, 23, 56, 48, 93];

function analyzeGrades(grades) {

    const highestGrade = Math.max(...grades);
    const lowestGrade = Math.max(...grades);
    const averageGrade = (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);

    console.log(`Highest grade: ${highestGrade}`);
    console.log(`lowest grade: ${lowestGrade}`);
    console.log(`Average grade: ${averageGrade}`);
}

analyzeGrades(grades);
