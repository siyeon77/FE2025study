const student = {
  name: "박시연",
  age: 20,
  grade: 1,
  subjects: ["의료정보학", "의료데이터베이스실무", "웹프로그래밍2", "의료IoT기초"],
  scores: {
    의료정보학: "A",
    의료데이터베이스실무: "A",
    웹프로그래밍2: "A",
    의료IoT기초: "A"
  },
  printScores: function () {
    console.log(`학생 이름: ${this.name}`);
    console.log(`학년: ${this.grade}학년`);
    console.log("과목별 성적:");
    for (let subject of this.subjects) {
      console.log(`- ${subject}: ${this.scores[subject]}`);
    }
  }
};

student.printScores();