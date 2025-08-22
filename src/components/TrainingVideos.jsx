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
  const [showAdmissionTypeDropdown, setShowAdmissionTypeDropdown] = useState(false);
  const [showBillTypeDropdown, setShowBillTypeDropdown] = useState(false);
  const [showNumInvoicesDropdown, setShowNumInvoicesDropdown] = useState(false);
  const [showModeOfPaymentDropdown, setShowModeOfPaymentDropdown] = useState(false);
  
  // Dropdown options
  const admissionTypeOptions = ["Play Group", "LKG", "UKG", "Elementary"];
  const billTypeOptions = ["Monthly", "Quarterly", "Half-yearly", "Yearly"];
  const numInvoicesOptions = ["1", "2", "3", "4", "5"];
  const modeOfPaymentOptions = ["Credit Card", "Debit Card", "UPI", "Other Modes"];
  
  // Input handlers with validation
  const handleChildNameChange = (value) => {
    // Only allow alphabetic characters and spaces
    if (value === "" || /^[A-Za-z\s]*$/.test(value)) {
      setChildName(value);
    }
  };
  
  const handleDayCareNameChange = (value) => {
    // Only allow alphabetic characters and spaces
    if (value === "" || /^[A-Za-z\s]*$/.test(value)) {
      setDayCareCentre(value);
    }
  };
  
  const handleDayCareFees = (value) => {
    // Only allow numbers and commas
    if (value === "" || /^[0-9,]*$/.test(value)) {
      setDayCareFees(value);
    }
  };
  const [billType, setBillType] = useState("");
  const [numInvoices, setNumInvoices] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [termDuration, setTermDuration] = useState("");
  const [showTermPicker, setShowTermPicker] = useState(false);
  const [startMonth, setStartMonth] = useState(null);
  const [endMonth, setEndMonth] = useState(null);
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
    const nameRegex = /^[A-Za-z\s]+$/;
    const numberRegex = /^[0-9,]+$/;
    
    if (!childName) {
      errors.childName = "Child name is required";
    } else if (!nameRegex.test(childName)) {
      errors.childName = "Only alphabetic characters allowed";
    }
    
    if (!dob) errors.dob = "Date of birth is required";
    if (!age) errors.age = "Age is required";
    
    if (!dayCareCentre) {
      errors.dayCareCentre = "Day care centre is required";
    } else if (!nameRegex.test(dayCareCentre)) {
      errors.dayCareCentre = "Only alphabetic characters allowed";
    }
    
    if (!dayCareFees) {
      errors.dayCareFees = "Day care fees is required";
    } else if (!numberRegex.test(dayCareFees)) {
      errors.dayCareFees = "Only numbers allowed";
    }
    
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
                onChange={handleChildNameChange}
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
                  onClick={() => setShowDobPicker(!showDobPicker)}
                />
                {showDobPicker && (
                  <div style={{ position: 'absolute', zIndex: 1000, top: '64px', background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
                    <DayPicker
                      mode="single"
                      selected={dob ? new Date(dob) : undefined}
                      onSelect={(date) => {
                        if (date) {
                          // Format as DD-MMM-YYYY (e.g., 24-May-2024)
                          const day = date.getDate();
                          const month = date.toLocaleString('en-US', { month: 'short' });
                          const year = date.getFullYear();
                          const formatted = `${day}-${month}-${year}`;
                          setDob(formatted);
                          
                          // Calculate age
                          const today = new Date();
                          let years = today.getFullYear() - date.getFullYear();
                          let months = today.getMonth() - date.getMonth();
                          
                          if (months < 0) {
                            years--;
                            months += 12;
                          }
                          
                          setAge(`${years} Year${years !== 1 ? 's' : ''} ${months} M`);
                          setShowDobPicker(false);
                        }
                      }}
                      captionLayout="dropdown-buttons"
                      fromYear={new Date().getFullYear() - 20}
                      toYear={new Date().getFullYear()}
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
                readOnly={true}
              />
        </div>

            {/* Second row - still under Child Details */}
            <div className="daycare-row">
              <FieldBox
                label="Name of Day Care Centre"
                required
                placeholder="Euro Kid Day care"
                value={dayCareCentre}
                onChange={handleDayCareNameChange}
                error={validationErrors.dayCareCentre}
              />
              <div style={{ position: 'relative', flex: 1 }}>
                <FieldBox
                  label="Admission Type"
                  placeholder="Play Group"
                  value={admissionType}
                  onChange={setAdmissionType}
                  rightIconSrc={new URL("../assets/svg/form-downarrow.svg", import.meta.url).href}
                  rightIconAlt="Select"
                  onClick={() => setShowAdmissionTypeDropdown(!showAdmissionTypeDropdown)}
                />
                {showAdmissionTypeDropdown && (
                  <div style={{ position: 'absolute', zIndex: 1000, top: '64px', left: 0, right: 0, background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '5px 0' }}>
                    {admissionTypeOptions.map((option, index) => (
                      <div 
                        key={index} 
                        style={{ padding: '8px 12px', cursor: 'pointer' }}
                        className="dropdown-item"
                        onClick={() => {
                          setAdmissionType(option);
                          setShowAdmissionTypeDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <FieldBox
                label="Day Care Fees"
                required
                placeholder="10,000"
                value={dayCareFees}
                onChange={handleDayCareFees}
                error={validationErrors.dayCareFees}
              />
        </div>

            {/* Billing Details heading */}
            <div className="section-divider">
              <div className="section-heading-container">
                <img 
                  src={new URL("../assets/svg/border-box.svg", import.meta.url).href} 
                  alt="Border box" 
                  className="section-heading-background" 
                />
                <span className="section-heading">Billing Details</span>
              </div>
            </div>

            {/* Third row - Billing Details */}
            <div className="daycare-row">
              <div style={{ position: 'relative', flex: 1 }}>
                <FieldBox
                  label="Bill Type"
                  required
                  placeholder="Monthly"
                  value={billType}
                  onChange={setBillType}
                  rightIconSrc={new URL("../assets/svg/form-downarrow.svg", import.meta.url).href}
                  rightIconAlt="Select"
                  error={validationErrors.billType}
                  onClick={() => setShowBillTypeDropdown(!showBillTypeDropdown)}
                />
                {showBillTypeDropdown && (
                  <div style={{ position: 'absolute', zIndex: 1000, top: '64px', left: 0, right: 0, background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '5px 0' }}>
                    {billTypeOptions.map((option, index) => (
                      <div 
                        key={index} 
                        style={{ padding: '8px 12px', cursor: 'pointer' }}
                        className="dropdown-item"
                        onClick={() => {
                          setBillType(option);
                          setShowBillTypeDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ position: 'relative', flex: 1 }}>
                <FieldBox
                  label="No of Invoice"
                  required
                  placeholder="1"
                  value={numInvoices}
                  onChange={setNumInvoices}
                  rightIconSrc={new URL("../assets/svg/form-downarrow.svg", import.meta.url).href}
                  rightIconAlt="Select"
                  error={validationErrors.numInvoices}
                  onClick={() => setShowNumInvoicesDropdown(!showNumInvoicesDropdown)}
                />
                {showNumInvoicesDropdown && (
                  <div style={{ position: 'absolute', zIndex: 1000, top: '64px', left: 0, right: 0, background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '5px 0' }}>
                    {numInvoicesOptions.map((option, index) => (
                      <div 
                        key={index} 
                        style={{ padding: '8px 12px', cursor: 'pointer' }}
                        className="dropdown-item"
                        onClick={() => {
                          setNumInvoices(option);
                          setShowNumInvoicesDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ position: 'relative', flex: 1 }}>
                <FieldBox
                  label="Mode of Payment"
                  required
                  placeholder="Credit/Debit Card"
                  value={modeOfPayment}
                  onChange={setModeOfPayment}
                  rightIconSrc={new URL("../assets/svg/form-downarrow.svg", import.meta.url).href}
                  rightIconAlt="Select"
                  error={validationErrors.modeOfPayment}
                  onClick={() => setShowModeOfPaymentDropdown(!showModeOfPaymentDropdown)}
                />
                {showModeOfPaymentDropdown && (
                  <div style={{ position: 'absolute', zIndex: 1000, top: '64px', left: 0, right: 0, background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '5px 0' }}>
                    {modeOfPaymentOptions.map((option, index) => (
                      <div 
                        key={index} 
                        style={{ padding: '8px 12px', cursor: 'pointer' }}
                        className="dropdown-item"
                        onClick={() => {
                          setModeOfPayment(option);
                          setShowModeOfPaymentDropdown(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
      </div>

            {/* Fourth row - Term duration and Add button inline */}
            <div className="daycare-row" style={{ alignItems: "end" }}>
              <div style={{ position: 'relative', flex: '0 0 360px' }}>
                <FieldBox
                  label="Term Duration of School"
                  required
                  placeholder="June-March"
                  value={termDuration}
                  onChange={setTermDuration}
                  rightIconSrc={new URL("../assets/svg/date-picker.svg", import.meta.url).href}
                  rightIconAlt="Calendar"
                  error={validationErrors.termDuration}
                  onClick={() => setShowTermPicker(!showTermPicker)}
                />
                {showTermPicker && (
                  <div style={{ position: 'absolute', zIndex: 1000, top: '64px', background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', borderRadius: '8px', padding: '10px', display: 'flex', gap: '10px' }}>
                    <div>
                      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '5px' }}>Start Month</div>
                      <DayPicker
                        mode="single"
                        selected={startMonth}
                        onSelect={(date) => {
                          if (date) {
                            setStartMonth(date);
                            // If both months are selected, update the term duration
                            if (endMonth) {
                              const startMonthName = date.toLocaleString('en-US', { month: 'long' });
                              const endMonthName = endMonth.toLocaleString('en-US', { month: 'long' });
                              setTermDuration(`${startMonthName}-${endMonthName}`);
                              setShowTermPicker(false);
                            }
                          }
                        }}
                        captionLayout="dropdown-buttons"
                        fromMonth={new Date(new Date().getFullYear(), 0)}
                        toMonth={new Date(new Date().getFullYear(), 11)}
                        defaultMonth={new Date(new Date().getFullYear(), 0)}
                        formatters={{ formatMonthCaption: (date) => date.toLocaleString('en-US', { month: 'long' }) }}
                        showOutsideDays={false}
                        footer={<div style={{ textAlign: 'center', fontSize: '12px', color: '#666' }}>Select start month</div>}
                      />
                    </div>
                    <div>
                      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '5px' }}>End Month</div>
                      <DayPicker
                        mode="single"
                        selected={endMonth}
                        onSelect={(date) => {
                          if (date) {
                            setEndMonth(date);
                            // If both months are selected, update the term duration
                            if (startMonth) {
                              const startMonthName = startMonth.toLocaleString('en-US', { month: 'long' });
                              const endMonthName = date.toLocaleString('en-US', { month: 'long' });
                              setTermDuration(`${startMonthName}-${endMonthName}`);
                              setShowTermPicker(false);
                            }
                          }
                        }}
                        captionLayout="dropdown-buttons"
                        fromMonth={new Date(new Date().getFullYear(), 0)}
                        toMonth={new Date(new Date().getFullYear(), 11)}
                        defaultMonth={new Date(new Date().getFullYear(), 6)}
                        formatters={{ formatMonthCaption: (date) => date.toLocaleString('en-US', { month: 'long' }) }}
                        showOutsideDays={false}
                        footer={<div style={{ textAlign: 'center', fontSize: '12px', color: '#666' }}>Select end month</div>}
                      />
                    </div>
                  </div>
                )}
              </div>
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
              <div className="upload-label" style={{ fontWeight: 'bold' }}>
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
              <div className="upload-label" style={{ fontWeight: 'bold' }}>
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
                <div className="upload-label" style={{ fontWeight: 'bold' }}>Comment (Max 500 Chars)</div>
                <textarea 
                  className="comment-box" 
                  placeholder="Enter your comments here"
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