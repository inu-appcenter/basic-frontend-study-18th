function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayHi = function () {
    console.log('안녕하세요!' + this.name + '입니다');
  };
}

const person1 = new Person('홍길동', 30, 'Manager');
const person2 = new Person('김철수', 30, 'Designer');

console.log(person1.name);
console.log(person2.age);
person1.sayHi();
person2.sayHi();
