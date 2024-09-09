// MyDocument.tsx
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    border: '1px solid #ddd',
  },
});

// Create the PDF document
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Sample PDF</Text>
      <View style={styles.section}>
        <Text>Section 1: Introduction</Text>
        <Text>This is a sample section of the PDF document.</Text>
      </View>
      <View style={styles.section}>
        <Text>Section 2: Details</Text>
        <Text>Here we can add more details and information.</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
