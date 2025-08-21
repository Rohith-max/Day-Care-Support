import React, { useState } from "react";
import "../styles/TrainingVideos.css";
import NoteIcon from "./NoteIcon.jsx";
import DocumentsMenu from "./DocumentsMenu.jsx";
import FieldBox from "./FieldBox.jsx";
import ChildDetailsTable from "./ChildDetailsTable.jsx";
import UploadSmall from "./UploadSmall.jsx";
import PolicyIcon from "./PolicyIcon.jsx";
import Tooltip from "./Tooltip.jsx";
import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';

const TrainingVideos = () => {
  const [childName, setChildName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [dayCareCentre, setDayCareCentre] = useState("");
  const [admissionType, setAdmissionType] = useState("");
  const [dayCareFees, setDayCareFees] = useState("");
  const [billType, setBillType] = useState("");
  const [numInvoices, setNumInvoices] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [termDuration, setTermDuration] = useState("");
  const [comment, setComment] = useState("");
  
  // State for table data
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Penaganti",
      dob: "03-24-2024",
      age: "1 year 6M",
      dayCareCentre: "Euro Kid Day care",
      admissionType: "Play Group",
      dayCareFees: "10,000",
      numInvoices: "1",
      invoiceDate: "24-06-2025",
      modeOfPayment: "Credit/ Debit Card",
      hardCopy: "Yes",
      termDuration: "June-March",
      billType: "Monthly"
    }
  ]);

  // Validation state
  const [validationErrors, setValidationErrors] = useState({});
  
  // Page state: 1 = form entry, 2 = review actions (per Figma), 3/4 reserved
  const [pageState, setPageState] = useState(1);
  
  // State for info tooltips
  const [showDobNote, setShowDobNote] = useState(false);
  const [showUploadNote, setShowUploadNote] = useState(false);
  const [showDobPicker, setShowDobPicker] = useState(false);
  // Track uploads
  const [dobUploaded, setDobUploaded] = useState(false);
  const [docsUploaded, setDocsUploaded] = useState(false);

  // Function to validate form fields
  const validateForm = () => {
    const errors = {};
    if (!childName) errors.childName = "Child name is required";
    if (!dob) errors.dob = "Date of birth is required";
    if (!age) errors.age = "Age is required";
    if (!dayCareCentre) errors.dayCareCentre = "Day care centre is required";
    if (!dayCareFees) errors.dayCareFees = "Day care fees is required";
    if (!billType) errors.billType = "Bill type is required";
    if (!numInvoices) errors.numInvoices = "Number of invoices is required";
    if (!modeOfPayment) errors.modeOfPayment = "Mode of payment is required";
    if (!termDuration) errors.termDuration = "Term duration is required";
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Function to add new child data to table (does not change page state)
  const addChildData = () => {
    // Clear previous validation errors and success message
    setValidationErrors({});
    
    // Validate required fields
    if (!validateForm()) {
      return;
    }

    // Create new row data
    const newRow = {
      id: Date.now(), // Use timestamp as unique ID
      name: childName,
      dob: dob,
      age: age,
      dayCareCentre: dayCareCentre,
      admissionType: admissionType,
      dayCareFees: dayCareFees,
      numInvoices: numInvoices,
      invoiceDate: new Date().toLocaleDateString('en-GB'), // Current date as invoice date
      modeOfPayment: modeOfPayment,
      hardCopy: "Yes", // Default value
      termDuration: termDuration,
      billType: billType
    };

    // Add to table
    setTableData(prevData => [...prevData, newRow]);

    // Clear form fields
    setChildName("");
    setDob("");
    setAge("");
    setDayCareCentre("");
    setAdmissionType("");
    setDayCareFees("");
    setBillType("");
    setNumInvoices("");
    setModeOfPayment("");
    setTermDuration("");

    // Stay in state 1; Submit controls state transition
  };

  const handleSubmit = () => {
    if (!dobUploaded || !docsUploaded) {
      alert("Please upload required documents before submitting.");
      return;
    }
    setPageState(2);
  };

  const handleSendBack = () => {
    setPageState(1);
  };
  
  const handleApprove = () => {
    setPageState(3);
  };

  // Function to remove row from table
  const removeRow = (id) => {
    setTableData(prevData => prevData.filter(row => row.id !== id));
  };

  return (
    <div className="training-videos-container">

      <div className="daycare-box">
        <div className="daycare-box-header">
          <div className="header-left">
            <span className="section-heading">Child Details</span>
            </div>
          {pageState === 1 && (
            <div className="header-right">
              <DocumentsMenu />
              <Tooltip position="left">
                <NoteIcon width={28} height={34} />
              </Tooltip>
            </div>
          )}
        </div>
        {pageState === 1 && (
          <>
            {/* First row of boxes per spec demo */}
            <div className="daycare-row">
              <FieldBox
                label="Name of Child"
                required
                placeholder="Ashwini"
                value={childName}
                onChange={setChildName}
                error={validationErrors.childName}
              />
              <div style={{ position: 'relative', flex: 1 }}>
                <FieldBox
                  label="Date of Birth"
                  required
                  placeholder="24-May-2024"
                  value={dob}
                  onChange={setDob}
                  rightIconSrc={new URL("../assets/svg/date-picker.svg", import.meta.url).href}
                  rightIconAlt="Calendar"
                  error={validationErrors.dob}
                />
                {showDobPicker && (
                  <div style={{ position: 'absolute', zIndex: 1000, top: '64px' }}>
                    <DayPicker
                      mode="single"
                      selected={dob ? new Date(dob) : undefined}
                      onSelect={(date) => {
                        if (date) {
                          const formatted = date.toLocaleDateString('en-GB');
                          setDob(formatted);
                          setShowDobPicker(false);
                        }
                      }}
                    />
                  </div>
                )}
          </div>
              <FieldBox
                label="Age (Yrs)"
                required
                placeholder="1 Year 6 M"
                value={age}
                onChange={setAge}
                error={validationErrors.age}
              />
        </div>

            {/* Second row - still under Child Details */}
            <div className="daycare-row">
              <FieldBox
                label="Name of Day Care Centre"
                required
                placeholder="xxx-xx-xxxxxx-xx-xxxxx"
                value={dayCareCentre}
                onChange={setDayCareCentre}
                error={validationErrors.dayCareCentre}
              />
              <FieldBox
                label="Admission Type"
                placeholder="Play Group"
                value={admissionType}
                onChange={setAdmissionType}
                rightIconSrc={new URL("../assets/svg/chevron-down.svg", import.meta.url).href}
                rightIconAlt="Select"
              />
              <FieldBox
                label="Day Care Fees"
                required
                placeholder="Enter Day Care Fees"
                value={dayCareFees}
                onChange={setDayCareFees}
                error={validationErrors.dayCareFees}
              />
        </div>

            {/* Billing Details heading */}
            <div className="section-divider">
              <span className="section-heading">Billing Details</span>
      </div>

            {/* Third row - Billing Details */}
            <div className="daycare-row">
              <FieldBox
                label="Bill Type"
                required
                placeholder="Play Group"
                value={billType}
                onChange={setBillType}
                rightIconSrc={new URL("../assets/svg/chevron-down.svg", import.meta.url).href}
                rightIconAlt="Select"
                error={validationErrors.billType}
              />
              <FieldBox
                label="No of Invoice"
                required
                placeholder="1"
                value={numInvoices}
                onChange={setNumInvoices}
                error={validationErrors.numInvoices}
              />
              <FieldBox
                label="Mode of Payment"
                required
                placeholder="Credit/Debit Card"
                value={modeOfPayment}
                onChange={setModeOfPayment}
                rightIconSrc={new URL("../assets/svg/chevron-down.svg", import.meta.url).href}
                rightIconAlt="Select"
                error={validationErrors.modeOfPayment}
              />
      </div>

            {/* Fourth row - Term duration and Add button inline */}
            <div className="daycare-row" style={{ alignItems: "end" }}>
              <FieldBox
                label="Term Duration of School"
                required
                placeholder="June-March"
                value={termDuration}
                onChange={setTermDuration}
                rightIconSrc={new URL("../assets/svg/chevron-down.svg", import.meta.url).href}
                rightIconAlt="Select"
                style={{ flex: "0 0 360px" }}
                error={validationErrors.termDuration}
              />
              <button type="button" className="add-child-btn" onClick={addChildData}>
                <img src={new URL("../assets/svg/button.svg", import.meta.url).href} alt="Add Child Data" width={114} height={16} />
              </button>
            </div>

            
          </>
        )}

        {/* Table below details - always visible */}
        <div className="table-section">
          <ChildDetailsTable data={tableData} onRemoveRow={removeRow} showActions={pageState === 1} />
        </div>

        <div className="upload-section">
            <div className="upload-row">
              <div className="upload-label">
                D.O.B attachment(only)
                {pageState === 1 && (
                  <div className="icon-container">
                    <img 
                      src={new URL("../assets/svg/info_icon.svg", import.meta.url).href} 
                      alt="Info" 
                      width={18} 
                      height={18} 
                      style={{ marginLeft: '8px', verticalAlign: 'middle', cursor: 'pointer' }}
                      onClick={() => setShowDobNote(!showDobNote)}
                    />
                    {showDobNote && (
                      <div className="note-tooltip dob-note">
                        <img 
                          src={new URL("../assets/svg/note_dob.svg", import.meta.url).href} 
                          alt="DOB Note" 
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <UploadSmall onUploadedChange={setDobUploaded} />
            </div>

            <div className="upload-row">
              <div className="upload-label">
                Upload Document(s)
                {pageState === 1 && (
                  <div className="icon-container">
                    <img 
                      src={new URL("../assets/svg/info_icon.svg", import.meta.url).href} 
                      alt="Info" 
                      width={18} 
                      height={18} 
                      style={{ marginLeft: '8px', verticalAlign: 'middle', cursor: 'pointer' }}
                      onClick={() => setShowUploadNote(!showUploadNote)}
                    />
                    {showUploadNote && (
                      <div className="note-tooltip upload-note">
                        <img 
                          src={new URL("../assets/svg/note_upload.svg", import.meta.url).href} 
                          alt="Upload Note" 
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <UploadSmall onUploadedChange={setDocsUploaded} />
            </div>

            {pageState !== 3 && (
              <div className="comment-row">
                <div className="upload-label">Comment (Max 500 Chars)</div>
                <textarea 
                  className="comment-box" 
                  placeholder="xxx-xxx-xx-xxx-x"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={500}
                />
                {/* removed counter */}
              </div>
            )}
        </div>

        {/* Action Bar with View Policies and Submit */}
        {pageState !== 3 && (
          <div className="action-bar">
            <div className="submit-wrap" style={{ width: '100%' }}>
              {pageState === 1 ? (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="button" className="submit-btn" onClick={handleSubmit}>
                    <img src={new URL("../assets/svg/submit-button.svg", import.meta.url).href} width={90} height={38} alt="Submit" />
                  </button>
                </div>
              ) : (
                <div className="review-buttons">
                  <button type="button" className="submit-btn">
                    <img src={new URL("../assets/svg/restart.svg", import.meta.url).href} width={90} height={38} alt="Restart" />
                  </button>
                  <button type="button" className="submit-btn" onClick={handleSendBack}>
                    <img src={new URL("../assets/svg/send_back.svg", import.meta.url).href} width={90} height={38} alt="Send Back" />
                  </button>
                  <button type="button" className="submit-btn" onClick={handleApprove}>
                    <img src={new URL("../assets/svg/approve.svg", import.meta.url).href} width={90} height={38} alt="Approve" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {pageState === 2 && (
          <div style={{ width: 'calc(100% + 44px)', marginLeft: '-22px', marginRight: '-22px', marginTop: '8px', marginBottom: '32px' }}>
            <img 
              src={new URL("../assets/svg/transfer-workflow.svg", import.meta.url).href} 
              alt="Transfer Workflow" 
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        )}

        <div className="view-policies-link" style={{ paddingTop: '8px' }}>
          <PolicyIcon />
          <span>View Policies</span>
        </div>
      </div>

      {/* Submit removed as requested */}
    </div>
  );
};

export default TrainingVideos;