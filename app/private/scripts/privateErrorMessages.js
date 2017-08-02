angular.module("playerApp.errorMessages", [])
.constant("errorMessages", {"Courses":{"ENROLLED":{"START":"We are fetching enrolled courses...","FAILED":"Fetching enrolled courses failed, please try again later..."},"PAGE_API":{"START":"We are fetching data...","FAILED":"Fetching other courses failed, please try again later..."},"TOC":{"START":"We are fetching course details...","ERROR":"Unable to get course schedule details."},"ENROLL":{"START":"Enrolling....","ERROR":"Cannot enroll now.Try again later"}},"SEARCH":{"DATA":{"START":"We are fetching data","FAILED":"Fetching data failed, please try again later...","NO_CONTENT":"No results found"}},"COMMON":{"ERROR":"error","INFO":"info","WARNING":"warning","SUCCESS":"success","UN_AUTHORIZED":"You are not authorized to access this resource","INVALID_IMAGE":"Please upload a valid image file. Supported formats: JPG, PNG, JPEG. Max size: 4MB.","INVALID_FILE_SIZE":" is too large, maximum file size is ","PDF_MESSAGE":"File accepted only pdf (Max size 25mb).","MP4_MESSAGE":"File accepted only mp4 (Max size 25mb).","ZIP_MESSAGE":"File accepted only html zip (Max size 25mb).","INVALID_PDF_FILE":" is not valid pdf file.","INVALID_MP4_FILE":" is not valid mp4 file.","INVALID_ZIP_FILE":" is not valid zip file.","UNABLE_TO_PLAY":"Unable to play, please try again or close."},"WORKSPACE":{"DRAFT":{"START":"We are fetching draft content...","FAILED":"Fetching draft content failed, please try again later...","NO_CONTENT":"You don't have any draft content..."},"CREATE_LESSON":{"START":"We are creating lesson...","FAILED":"Creating lesson failed, please try again later..."},"CREATE_TEXTBOOK":{"START":"We are creating textbook...","FAILED":"Creating textbook failed, please try again later..."},"CREATE_COURSE":{"START":"We are creating course...","FAILED":"Creating course failed, please try again later..."},"CREATE_COLLECTION":{"START":"We are creating collection...","FAILED":"Creating collection failed, please try again later..."},"UPLOAD_CONTENT":{"START":"We are uploading content...","FAILED":"Uploading content failed, please try again later..."},"REVIEW":{"START":"We are fetching review content...","FAILED":"Fetching review content failed, please try again later...","NO_CONTENT":"You don't have any content in review..."},"PUBLISHED":{"START":"We are fetching published content...","FAILED":"Fetching published content failed, please try again later...","NO_CONTENT":"You don't have any published content..."},"ALL_UPLOADED":{"START":"We are fetching uploaded content...","FAILED":"Fetching uploaded content failed, please try again later...","NO_CONTENT":"You don't have any uploaded content..."},"GET":{"START":"We are fetching content detail...","FAILED":"Fetching content detail failed, please try again later..."},"UPLOAD_ICON":{"START":"We are updating icon...","FAILED":"Updating icon failed, please try again later..."},"UPDATE":{"START":"We are updating the content detail...","FAILED":"Updating content detail failed, please try again later...","SUCCESS":"Saved successfully..."},"REVIEW_CONTENT":{"START":"We are sending content for review...","FAILED":"Sending content for review failed, please try again later...","SUCCESS":"Content sent for review..."},"PUBLISH_CONTENT":{"START":"We are publishing the content...","FAILED":"Publishing content failed, please try again later...","SUCCESS":"Content published successfully..."},"REJECT_CONTENT":{"START":"We are rejecting the content...","FAILED":"Rejecting content failed, please try again later...","SUCCESS":"Content rejected successfully..."},"ContentCreation":{"invalidYoutubeVideoUrl":"Invalid youtube url, Please check..."},"UP_FOR_REVIEW":{"START":"We are fetching up for review content...","FAILED":"Fetching up for review content failed, please try again later...","NO_CONTENT":"You don't have any content for review..."},"RETIRE_CONTENT":{"START":"We are deleting the content...","FAILED":"Deleting content failed, please try again later...","SUCCESS":"Content deleted successfully..."},"FLAGGED":{"START":"We are fetching flagged content...","FAILED":"Fetching flagged content failed, please try again later...","NO_CONTENT":"You don't have any flagged content..."},"ACCEPT_CONTENT_FLAG":{"START":"We are accepting the flag...","FAILED":"Accepting flag failed, please try again later...","SUCCESS":"Flag accepted successfully..."},"DISCARD_CONTENT_FLAG":{"START":"We are discarding the flag...","FAILED":"Discarding flag failed, please try again later...","SUCCESS":"Flag discarded successfully..."},"REQUIRED_FIELDS":{"TITLE":"Title is missing","DESCRIPTION":"Description is missing","LESSON_TYPE":"Lesson type is missing","AUDIENCE":"Audience is missing","SUBJECT":"Subject is missing","GRADE":"Grade is missing","MEDIUM":"Medium is missing"}},"HOME":{"ENROLLED":{"START":"We are fetching enrolled courses...","FAILED":"Fetching enrolled courses failed, please try again later..."},"PAGE_API":{"START":"We are fetching data...","FAILED":"Fetching other courses failed, please try again later..."}},"RESOURCE":{"PAGE":{"START":"We are fetching content...","FAILED":"Fetching content failed, please try again later..."}},"NOTES":{"CREATE":{"START":"We are creating note...","FAILED":"Creating note is failed, please try again later...","SUCCESS":"Note created successfully..."},"GET":{"START":"Fetching note detail, please wait...","FAILED":"Fetching note detail is failed, please try again later...","SUCCESS":"Note detail fetched successfully..."},"REMOVE":{"START":"We are removing note...","FAILED":"Removing note is failed, please try again later...","SUCCESS":"Note deleted successfully..."},"SEARCH":{"START":"We are fetching notes...","FAILED":"Fetching note is failed, please try again later...","SUCCESS":"Note detail fetched successfully...","NO_RESULT":"You don't have any note, please create note..."},"UPDATE":{"START":"We are updating note...","FAILED":"Updating note is failed, please try again later...","SUCCESS":"Note updated successfully..."}},"PROFILE":{"FORM_VALIDATION":{"ADDRESS":{"address_type":"Please select address type","addLine1":"Please enter address line 1","city":"Please enter city","pin_code":"Please enter a valid pin code"},"BASIC_PROFILE":{"firstName":"Please enter a valid first name","phone":"Please enter a valid mobile number","email":"Please enter a valid email","language":"Please select a language","addhar":"Please enter a valid Aadhar Number"},"EDUCATION":{"institute":"Institution Name must have a value","degree":"Degree must have a value"},"JOB_PROFILE":{"jobName":"Job Name must have a value","org":"Organization must have a value"}},"API":{"SUCCESS":{"loadingProfile":"Loading profile ...","editingProfile":"Updating profile ...","profileEdited":"Profile successfully updated"},"ERROR":{"get":"Fetching profile failed, please try again later...","update":"Updating user profile failed,please try again later..."}}},"COLLECTION":{"PREVIEW":{"START":"Fetching data for you....","FAILED":"Unable to load data."}},"CONTENT_FLAG":{"START":"We are submitting your request...","FAILED":"Submitting request is failed, please try again later...","SUCCESS":"Request submitted successfully..."}});
