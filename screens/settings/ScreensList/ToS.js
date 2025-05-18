import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';

const tableData = [
  { id: 1, name: 'OUR SERVICES' },
  { id: 2, name: 'INTELLECTUAL PROPERTY RIGHTS' },
  { id: 3, name: 'USER REPRESENTATIONS' },
  { id: 4, name: 'USER REGISTRATION' },
  { id: 5, name: 'PROHIBITED ACTIVITIES' },
  { id: 6, name: 'USER GENERATED CONTRIBUTIONS' },
  { id: 7, name: 'CONTRIBUTION LICENSE' },
  { id: 8, name: 'MOBILE APPLICATION LICENSE' },
  { id: 9, name: 'SOCIAL MEDIA' },
  { id: 10, name: 'THIRD-PARTY WEBSITES AND CONTENT' },
  { id: 11, name: 'SERVICES MANAGEMENT' },
  { id: 12, name: 'PRIVACY POLICY' },
  { id: 13, name: 'TERM AND TERMINATION' },
  { id: 14, name: 'MODIFICATIONS AND INTERRUPTIONS' },
  { id: 15, name: 'GOVERNING LAW' },
  { id: 16, name: 'DISPUTE RESOLUTION' },
  { id: 17, name: 'CORRECTIONS' },
  { id: 18, name: 'DISCLAIMER' },
  { id: 19, name: 'LIMITATIONS OF LIABILITY' },
  { id: 20, name: 'INDEMNIFICATION' },
  { id: 21, name: 'USER DATA' },
  { id: 22, name: 'ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES' },
  { id: 23, name: 'MISCELLANEOUS' },
  { id: 24, name: 'CONTACT US' }
];

export default function ToS({ route }){
  const fromScreen = route.params?.fromScreen;

    const handleBack = () => {
    if (fromScreen) {
      navigation.navigate(fromScreen);
    } else {
      navigation.goBack();
    }
  };

  const navigation = useNavigation();
  // Create a ref for the ScrollView
  const scrollViewRef = useRef(null);
  
  // Create refs for each section
  const sectionRefs = useRef({});
  
  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    if (sectionRefs.current[id] && scrollViewRef.current) {
      sectionRefs.current[id].measureLayout(
        scrollViewRef.current,
        (x, y) => {
          scrollViewRef.current.scrollTo({ y: y, animated: true });
        },
        () => console.log('Failed to measure layout')
      );
    }
  };

  return(
     <LinearGradient 
      colors={['#0F2027', '#2f5866', '#32657a']}
          style={styles.linearGradient}>
      <ScrollView 
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollView}>
        <Text style={styles.mainTitle}>Term of Services</Text>
        <Text style={{color: 'white', textAlign: 'center', marginTop: -10, fontFamily: 'SpaceMono-Regular'}}>Last updated May 06, 2025</Text>

        {/* Agreement to our legal terms */}
        <Text style={styles.Title}>AGREEMENT TO OUR LEGAL TERMS</Text>
        <Text style={styles.content}>We are BrightMind Labs.{'\n'}</Text>

        <Text style={styles.content}>We operate the mobile application EduNexis (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms")(collectively, the "Services").{'\n'}</Text>
        <Text style={styles.content}>EduNexis is an educational mobile application that is aligned with the Sustainable Development Goal 4 entitled "Quality Education". This mobile application provides the users fun and interactive experiences through learning in a simple environment for students of all ages. EduNexis covers a wide range of topics about Programming/coding like HTML, CSS, and JavaScript.{'\n'}
        Users can access a dynamic home screen where subjects are visually presented that can press to access it and some updates and highlights of the application. Each subject opens into a module containing a starting point with introduction and branching into subtopics, accurate and complete explanations of the topics, exercises at every end of a topic, and interactive quizzes.
        {'\n'} 
        This application offers a straightforward and engaging educational experience by providing users with a variety of topics and lessons to support their learning journey.{'\n'}</Text>

        <Text style={styles.content}>You can contact us by email at brightminds@gmail.com{'\n'}</Text>
        
        <Text style={styles.content}>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by alll of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.{'\n'}</Text>

        <Text style={styles.content}>We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.{'\n'}</Text>

        <Text style={styles.content}>All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be driectly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.{'\n'}</Text>

        <Text style={styles.content}>We recommend that you print a copy of these Legal Terms for your records.</Text>

        {/* Table of Contents */}
        <Text style={styles.Title}>TABLE OF CONTENTS</Text>
        <View>
          <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          data={tableData}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity 
              activeOpacity={0.5}
              style={styles.tableDataContainer}
              onPress={() => scrollToSection(item.id)}
            >
              <Text style={styles.tableData}>{item.id}.{item.name}</Text>
            </TouchableOpacity>
            )}
          />
      </View>

      {/* Our services */}
      <View 
        ref={ref => sectionRefs.current[1] = ref}
        collapsable={false}
      >
        <Text style={[styles.Title, {marginTop: -30}]}>1. OUR SERVICES</Text>
        <Text style={styles.content}>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choos to access the Services from other location do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.{'\n'}</Text>
      </View>

      {/* Intellectual property rights */}
      <View 
        ref={ref => sectionRefs.current[2] = ref}
        collapsable={false}
      >
        <Text style={styles.Title}>2. INTELLECTUAL PROPERTY RIGHTS</Text>
        <Text style={[styles.subTitle, {marginTop: -10}]}>Our intellectual property</Text>
        <Text style={[styles.content, {marginBottom: -8}]}>We are the owner or the license of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained theirein (the "Marks").</Text>
        <Text style={styles.content}>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.{'\n'}</Text>
        <Text style={[styles.content, {marginBottom: 15}]}>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commerical use or internal business purpose only.{'\n'}</Text>

        <Text style={[styles.subTitle, {marginTop: -35}]}>Your use of our Services</Text>
        <Text style={styles.content}>Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant tou a non-exclusive, non-transferable, revocable lincese to:{'\n'}</Text>

        <Text style={[styles.content, {paddingHorizontal: 65}]}>{'\u2022'} access the Services; and</Text>
        <Text style={[styles.content, {paddingHorizontal: 65, marginBottom: 20}]}>{'\u2022'} download or print a copy of any portion of the Content to which you have property gained access,</Text>

        <Text style={styles.content}>solely for your personal, non-commercial use or internal business purpose.{'\n'}</Text>

        <Text style={styles.content}>Exceppt as set out in this section or else where in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.{'\n'}</Text>
        <Text style={styles.content}>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or else where in our Legal Terms, please address your request to: supportbrightminds@gmail.com. If we ever grant you the permission to post, reporduce, or publicly display any part of our Services or Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</Text>
        <Text style={[styles.content, {marginTop: -15}]}>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.{'\n'}</Text>
        <Text style={styles.content}>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</Text>
        
        <Text style={styles.subTitle}>Your submissions</Text>
        <Text style={styles.content}>Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the rights you give us and obligations you have when you post or upload any content through the Services. {'\n'}</Text>
        
        <Text style={styles.content}>Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commericla or otherwise, without acknowledgement or compensation to you.{'\n'}</Text>

        <Text style={styles.content}>You are responsible for what you post or upload: By sending us Submissions through any part of the Services you:{'\n'}</Text>

        <Text style={styles.content}>{'\u2022'} confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</Text>
        <Text style={styles.content}>{'\u2022'} to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</Text>
        <Text style={styles.content}>{'\u2022'} warrant that any such Submission are original to you or that you have the necessary rights and to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions</Text>
        <Text style={styles.content}>{'\u2022'} warrant and represent that your Submissions do not constitute confidential information.{'\n'}</Text>

        <Text style={styles.content}>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.</Text>
      </View>
          
      {/* 3. User Representations */}
      <View 
        ref={ref => sectionRefs.current[3] = ref}
        collapsable={false}
      >
        <Text style={styles.Title}>3. USER REPRESENTATIONS</Text>
        <Text style={styles.content}>By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside  or if a minor, you have received parental permission to use the Services; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; (7) your use of the Services will not violate any applicable law or regulation. {'\n'}</Text>

        <Text style={styles.content}>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</Text>
      </View>
      
      {/* 4. User Registration */}
      <View 
        ref={ref => sectionRefs.current[4] = ref}
        collapsable={false}
      >
        <Text style={styles.Title}>4. USER REGISTRATION</Text>
        <Text style={styles.content}>You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</Text>
      </View>
      
      {/* 5. Prohibted Activities */}
      <View 
        ref={ref => sectionRefs.current[5] = ref}
        collapsable={false}
      >
        <Text style={styles.Title}>5. PROHIBITED ACTIVITIES</Text>
        <Text style={styles.content}>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</Text>
      </View>


      <Button 
        mode="contained" 
        onPress={handleBack}
        style={styles.closeButton}
        labelStyle={{color: 'black', fontFamily: 'SpaceMono-Regular'}}
      >
        Close
      </Button>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  linearGradient:{
    flex: 1,
    paddingTop: 20
  },

  // main title
  mainTitle:{
    fontFamily: 'NeueMontreal-Bold',
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 15
  },

  // sub titles
  Title:{
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10
  },

  // content
  content:{
    fontFamily: 'SpaceMono-Regular',
    fontSize: 15,
    color: 'white',
    textAlign: 'justify',
    paddingHorizontal: 20,
    paddingVertical: 5
  },

  subTitle:{
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10
  },

  // close button
  closeButton: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 20
  },

  // table data style
  tableData:{
    fontFamily: 'SpaceMono-Regular',
    fontSize: 13,
    color: 'white',
    paddingHorizontal: 20,
  },
  
  tableDataContainer: {
    paddingVertical: 8
  }
})