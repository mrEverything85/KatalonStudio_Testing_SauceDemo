<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS01_Login_Logout</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>ed894ed8-29a9-44db-9b2e-293595f442bc</testSuiteGuid>
   <testCaseLink>
      <guid>bbc2c108-c890-4eeb-8df6-365044f00300</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TS_TC01_Login_Success</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>42479871-fccd-4e75-8a0f-8cda61eed1b0</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/UserLoginData1</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>42479871-fccd-4e75-8a0f-8cda61eed1b0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>36df44d1-19b7-454b-bab0-182b04b7eb82</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>42479871-fccd-4e75-8a0f-8cda61eed1b0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>46e03e5a-3ff1-40b0-a113-7527ebfce550</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>d0608c0c-7510-4db9-9a8d-c36498d06b5a</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TS_TC05_Logout</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>19d4b977-92e8-4cb4-b090-0f710bbf6c0c</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/UserLoginData1</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
</TestSuiteEntity>
