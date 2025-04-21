import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';


type CourseList = {
  subtitle: string;
  courses: string[];
};

const CourseList = (props: CourseList) => {
  return (
    <View>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      <Text style={styles.message}>{props.courses.join('\n')}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const coreCourses = [
    'CS504 - Software Engineering',
    'CS506 - Programming for Computing',
    'CS519 - Cloud Computing Overview',
    'CS533 - Computer Architecture',
    'CS547 - Secure Systems and Programs',
    'CS622 - Discrete Math and Algorithms for Computing',
    'CS510 - Artificial Intelligence for Data Science',
    'CS620 - Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS624 - Full-Stack Development - Mobile App',
    'CS628 - Full-Stack Development - Web App',
  ];

  const capstoneCourse = ['CS687 - Computer Science Capstone'];

  return(
    <ScrollView style={styles.scrollContainer}>
      <View>
        <Image
          source={require('../../assets/images/icon.png')}
          style={{width: 250, height: 250, marginBottom: 20}}
        />
        <Text style={{fontSize: 16}}>What is your favourite course?</Text>
        <TextInput style={styles.inputContainer}
          defaultValue='ex: CS510 - Artificial Intelligence for Data Science'
        />
      </View>

      <View style={styles.courseContainer}>
        <Text style={styles.title}>MSCS Courses</Text>
        <CourseList subtitle="Core Requirements (24 Credits)" courses={coreCourses} />
        <CourseList subtitle="Depth of Study (6 Credits)" courses={depthCourses} />
        <CourseList subtitle="Capstone Course (3 Credits)" courses={capstoneCourse} />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles=StyleSheet.create({
  scrollContainer: {
      padding: 20,
      marginTop: 30,
      backgroundColor: '#ffffff'
  },
  inputContainer:{
    marginTop: 5,
    borderWidth: 1,
    color: '#9c9c98',
    padding: 10,
    marginBottom: 20,
  },
  courseContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fafad9',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 28,
    backgroundColor: '#f0f005',
    marginTop: 20,
  },
  message: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
  },
});
