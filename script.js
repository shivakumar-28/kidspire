// Global variables
let currentUser = null;
let selectedClass = null;

// Subjects based on CBSE curriculum for classes 1-5
const subjectsByClass = {
    1: [
        { name: 'English - Class 1', icon: 'fas fa-abc', description: 'Letters, words, phonics, and basic reading', color: '#ff6b6b' },
        { name: 'Mathematics - Class 1', icon: 'fas fa-calculator', description: 'Numbers 1-100, counting, shapes, and patterns', color: '#4ecdc4' },
        { name: 'EVS - Class 1', icon: 'fas fa-leaf', description: 'Family, friends, food, water, and environment', color: '#45b7d1' },
        { name: 'Hindi - Class 1', icon: 'fas fa-language', description: 'Basic Hindi letters, words, and simple sentences', color: '#96ceb4' },
        { name: 'Telugu - Class 1', icon: 'fas fa-font', description: 'Basic Telugu letters, words, and simple sentences', color: '#ff9ff3' },
        { name: 'General Knowledge - Class 1', icon: 'fas fa-lightbulb', description: 'Colors, animals, birds, and basic facts', color: '#feca57' }
    ],
    2: [
        { name: 'English - Class 2', icon: 'fas fa-book-open', description: 'Reading comprehension, grammar, and writing', color: '#ff9ff3' },
        { name: 'Mathematics - Class 2', icon: 'fas fa-plus-circle', description: 'Addition, subtraction, multiplication tables', color: '#54a0ff' },
        { name: 'EVS - Class 2', icon: 'fas fa-tree', description: 'Plants, animals, seasons, and community helpers', color: '#5f27cd' },
        { name: 'Hindi - Class 2', icon: 'fas fa-font', description: 'Hindi grammar, vocabulary, and reading', color: '#00d2d3' },
        { name: 'Telugu - Class 2', icon: 'fas fa-book-reader', description: 'Telugu grammar, vocabulary, and reading', color: '#ff6348' },
        { name: 'General Knowledge - Class 2', icon: 'fas fa-globe', description: 'Transport, communication, and Indian culture', color: '#ff9f43' }
    ],
    3: [
        { name: 'English - Class 3', icon: 'fas fa-pen-fancy', description: 'Grammar, composition, and literature', color: '#ee5a24' },
        { name: 'Mathematics - Class 3', icon: 'fas fa-divide', description: 'Multiplication, division, fractions, and geometry', color: '#0abde3' },
        { name: 'EVS - Class 3', icon: 'fas fa-user-friends', description: 'Our body, food, water, and shelter', color: '#006ba6' },
        { name: 'Hindi - Class 3', icon: 'fas fa-book-reader', description: 'Advanced Hindi grammar and literature', color: '#ff6348' },
        { name: 'Telugu - Class 3', icon: 'fas fa-scroll', description: 'Advanced Telugu grammar and literature', color: '#2ed573' },
        { name: 'General Knowledge - Class 3', icon: 'fas fa-atom', description: 'Science facts, geography, and current affairs', color: '#fdcb6e' }
    ],
    4: [
        { name: 'English - Class 4', icon: 'fas fa-scroll', description: 'Advanced grammar, poetry, and creative writing', color: '#ff3838' },
        { name: 'Mathematics - Class 4', icon: 'fas fa-percentage', description: 'Decimals, percentages, measurements, and data handling', color: '#3742fa' },
        { name: 'EVS - Class 4', icon: 'fas fa-recycle', description: 'Our environment, natural resources, and conservation', color: '#2f3542' },
        { name: 'Hindi - Class 4', icon: 'fas fa-feather-alt', description: 'Hindi literature, grammar, and composition', color: '#ffa502' },
        { name: 'Telugu - Class 4', icon: 'fas fa-pen-nib', description: 'Telugu literature, grammar, and composition', color: '#ff3838' },
        { name: 'General Knowledge - Class 4', icon: 'fas fa-rocket', description: 'Science discoveries, Indian heritage, and world facts', color: '#2ed573' }
    ],
    5: [
        { name: 'English - Class 5', icon: 'fas fa-graduation-cap', description: 'Literature, advanced writing, and communication skills', color: '#ff4757' },
        { name: 'Mathematics - Class 5', icon: 'fas fa-infinity', description: 'Algebra basics, advanced geometry, and statistics', color: '#5352ed' },
        { name: 'EVS - Class 5', icon: 'fas fa-seedling', description: 'Environmental issues, sustainability, and ecosystems', color: '#26de81' },
        { name: 'Hindi - Class 5', icon: 'fas fa-trophy', description: 'Advanced Hindi literature and language skills', color: '#fd79a8' },
        { name: 'Telugu - Class 5', icon: 'fas fa-crown', description: 'Advanced Telugu literature and language skills', color: '#ff4757' },
        { name: 'General Knowledge - Class 5', icon: 'fas fa-brain', description: 'Global awareness, technology, and social issues', color: '#fdcb6e' }
    ]
};

// Games based on subjects and classes
const gamesBySubject = {
    'English - Class 1': [
        { name: 'ABC Fun', icon: 'fas fa-puzzle-piece', description: 'Learn letters with fun games' },
        { name: 'Word Builder', icon: 'fas fa-cubes', description: 'Build simple words' },
        { name: 'Phonics Play', icon: 'fas fa-volume-up', description: 'Sound out words' }
    ],
    'English - Class 2': [
        { name: 'Reading Race', icon: 'fas fa-book-reader', description: 'Speed reading challenge' },
        { name: 'Grammar Quest', icon: 'fas fa-question-circle', description: 'Learn grammar through games' },
        { name: 'Story Builder', icon: 'fas fa-book-open', description: 'Create your own stories' }
    ],
    'English - Class 3': [
        { name: 'Composition Master', icon: 'fas fa-pen-fancy', description: 'Write amazing essays' },
        { name: 'Literature Explorer', icon: 'fas fa-scroll', description: 'Discover great stories' },
        { name: 'Grammar Ninja', icon: 'fas fa-star', description: 'Master grammar rules' }
    ],
    'English - Class 4': [
        { name: 'Poetry Creator', icon: 'fas fa-feather-alt', description: 'Write beautiful poems' },
        { name: 'Creative Writing', icon: 'fas fa-lightbulb', description: 'Unleash your creativity' },
        { name: 'Advanced Grammar', icon: 'fas fa-graduation-cap', description: 'Advanced language skills' }
    ],
    'English - Class 5': [
        { name: 'Literature Master', icon: 'fas fa-trophy', description: 'Explore classic literature' },
        { name: 'Communication Pro', icon: 'fas fa-microphone', description: 'Master public speaking' },
        { name: 'Writing Wizard', icon: 'fas fa-magic', description: 'Become a writing expert' }
    ],
    'Mathematics - Class 1': [
        { name: 'Number Fun', icon: 'fas fa-hashtag', description: 'Count and play with numbers' },
        { name: 'Shape Explorer', icon: 'fas fa-shapes', description: 'Discover different shapes' },
        { name: 'Pattern Master', icon: 'fas fa-th', description: 'Create and recognize patterns' }
    ],
    'Mathematics - Class 2': [
        { name: 'Addition Adventure', icon: 'fas fa-plus', description: 'Master addition skills' },
        { name: 'Subtraction Quest', icon: 'fas fa-minus', description: 'Conquer subtraction' },
        { name: 'Table Master', icon: 'fas fa-times', description: 'Learn multiplication tables' }
    ],
    'Mathematics - Class 3': [
        { name: 'Multiplication Mania', icon: 'fas fa-times', description: 'Master multiplication' },
        { name: 'Division Derby', icon: 'fas fa-divide', description: 'Learn division skills' },
        { name: 'Fraction Fun', icon: 'fas fa-pizza-slice', description: 'Understand fractions' }
    ],
    'Mathematics - Class 4': [
        { name: 'Decimal Detective', icon: 'fas fa-search', description: 'Solve decimal mysteries' },
        { name: 'Percentage Pro', icon: 'fas fa-percentage', description: 'Master percentages' },
        { name: 'Measurement Master', icon: 'fas fa-ruler', description: 'Learn measurements' }
    ],
    'Mathematics - Class 5': [
        { name: 'Algebra Adventure', icon: 'fas fa-infinity', description: 'Introduction to algebra' },
        { name: 'Geometry Genius', icon: 'fas fa-drafting-compass', description: 'Advanced geometry' },
        { name: 'Statistics Star', icon: 'fas fa-chart-bar', description: 'Data and statistics' }
    ],
    'EVS - Class 1': [
        { name: 'Family Fun', icon: 'fas fa-home', description: 'Learn about families' },
        { name: 'Animal Friends', icon: 'fas fa-paw', description: 'Meet animal friends' },
        { name: 'Nature Walk', icon: 'fas fa-tree', description: 'Explore nature' }
    ],
    'EVS - Class 2': [
        { name: 'Plant Explorer', icon: 'fas fa-seedling', description: 'Learn about plants' },
        { name: 'Weather Watch', icon: 'fas fa-cloud-sun', description: 'Understand weather' },
        { name: 'Community Helper', icon: 'fas fa-users', description: 'Meet community helpers' }
    ],
    'EVS - Class 3': [
        { name: 'Body Explorer', icon: 'fas fa-user', description: 'Learn about our body' },
        { name: 'Food Journey', icon: 'fas fa-apple-alt', description: 'Where food comes from' },
        { name: 'Water World', icon: 'fas fa-tint', description: 'Importance of water' }
    ],
    'EVS - Class 4': [
        { name: 'Environment Guard', icon: 'fas fa-recycle', description: 'Protect our environment' },
        { name: 'Resource Ranger', icon: 'fas fa-leaf', description: 'Natural resources' },
        { name: 'Conservation Hero', icon: 'fas fa-shield-alt', description: 'Save our planet' }
    ],
    'EVS - Class 5': [
        { name: 'Ecosystem Explorer', icon: 'fas fa-globe', description: 'Explore ecosystems' },
        { name: 'Sustainability Star', icon: 'fas fa-leaf', description: 'Sustainable living' },
        { name: 'Climate Champion', icon: 'fas fa-thermometer-half', description: 'Climate awareness' }
    ],
    'Hindi - Class 1': [
        { name: 'Akshar Adventure', icon: 'fas fa-font', description: 'Learn Hindi letters' },
        { name: 'Shabd Sagar', icon: 'fas fa-swimming-pool', description: 'Basic Hindi words' },
        { name: 'Varnamala Fun', icon: 'fas fa-abc', description: 'Hindi alphabet games' }
    ],
    'Telugu - Class 1': [
        { name: 'Telugu Aksharalu', icon: 'fas fa-font', description: 'Learn Telugu letters' },
        { name: 'Telugu Padalu', icon: 'fas fa-book', description: 'Basic Telugu words' },
        { name: 'Varnamala Telugu', icon: 'fas fa-abc', description: 'Telugu alphabet games' }
    ],
    'Hindi - Class 2': [
        { name: 'Grammar Guru', icon: 'fas fa-book', description: 'Hindi grammar basics' },
        { name: 'Vocabulary Builder', icon: 'fas fa-language', description: 'Build Hindi vocabulary' },
        { name: 'Reading Champion', icon: 'fas fa-book-reader', description: 'Hindi reading skills' }
    ],
    'Telugu - Class 2': [
        { name: 'Telugu Grammar', icon: 'fas fa-book', description: 'Telugu grammar basics' },
        { name: 'Telugu Vocabulary', icon: 'fas fa-language', description: 'Build Telugu vocabulary' },
        { name: 'Telugu Reading', icon: 'fas fa-book-reader', description: 'Telugu reading skills' }
    ],
    'Hindi - Class 3': [
        { name: 'Literature Explorer', icon: 'fas fa-scroll', description: 'Hindi literature' },
        { name: 'Advanced Grammar', icon: 'fas fa-graduation-cap', description: 'Advanced Hindi grammar' },
        { name: 'Composition Master', icon: 'fas fa-pen-fancy', description: 'Hindi writing skills' }
    ],
    'Telugu - Class 3': [
        { name: 'Telugu Literature', icon: 'fas fa-scroll', description: 'Telugu literature' },
        { name: 'Advanced Telugu Grammar', icon: 'fas fa-graduation-cap', description: 'Advanced Telugu grammar' },
        { name: 'Telugu Composition', icon: 'fas fa-pen-fancy', description: 'Telugu writing skills' }
    ],
    'Hindi - Class 4': [
        { name: 'Poetry Creator', icon: 'fas fa-feather-alt', description: 'Hindi poetry writing' },
        { name: 'Literature Master', icon: 'fas fa-trophy', description: 'Classic Hindi literature' },
        { name: 'Grammar Expert', icon: 'fas fa-star', description: 'Expert Hindi grammar' }
    ],
    'Telugu - Class 4': [
        { name: 'Telugu Poetry', icon: 'fas fa-feather-alt', description: 'Telugu poetry writing' },
        { name: 'Telugu Literature Master', icon: 'fas fa-trophy', description: 'Classic Telugu literature' },
        { name: 'Telugu Grammar Expert', icon: 'fas fa-star', description: 'Expert Telugu grammar' }
    ],
    'Hindi - Class 5': [
        { name: 'Language Master', icon: 'fas fa-crown', description: 'Master Hindi language' },
        { name: 'Creative Writer', icon: 'fas fa-lightbulb', description: 'Creative Hindi writing' },
        { name: 'Literature Scholar', icon: 'fas fa-medal', description: 'Advanced literature' }
    ],
    'Telugu - Class 5': [
        { name: 'Telugu Master', icon: 'fas fa-crown', description: 'Master Telugu language' },
        { name: 'Telugu Creative Writer', icon: 'fas fa-lightbulb', description: 'Creative Telugu writing' },
        { name: 'Telugu Literature Scholar', icon: 'fas fa-medal', description: 'Advanced Telugu literature' }
    ],
    'General Knowledge - Class 1': [
        { name: 'Color World', icon: 'fas fa-palette', description: 'Learn about colors' },
        { name: 'Animal Safari', icon: 'fas fa-paw', description: 'Discover animals' },
        { name: 'Fun Facts', icon: 'fas fa-lightbulb', description: 'Amazing facts' }
    ],
    'General Knowledge - Class 2': [
        { name: 'Transport Explorer', icon: 'fas fa-car', description: 'Learn about transport' },
        { name: 'Culture Quest', icon: 'fas fa-globe', description: 'Indian culture' },
        { name: 'Communication Fun', icon: 'fas fa-phone', description: 'How we communicate' }
    ],
    'General Knowledge - Class 3': [
        { name: 'Science Facts', icon: 'fas fa-atom', description: 'Amazing science facts' },
        { name: 'Geography Explorer', icon: 'fas fa-map', description: 'Explore the world' },
        { name: 'Current Affairs', icon: 'fas fa-newspaper', description: 'Stay updated' }
    ],
    'General Knowledge - Class 4': [
        { name: 'Discovery Quest', icon: 'fas fa-rocket', description: 'Scientific discoveries' },
        { name: 'Heritage Explorer', icon: 'fas fa-monument', description: 'Indian heritage' },
        { name: 'World Facts', icon: 'fas fa-globe-americas', description: 'Global knowledge' }
    ],
    'General Knowledge - Class 5': [
        { name: 'Global Citizen', icon: 'fas fa-globe', description: 'Global awareness' },
        { name: 'Tech Explorer', icon: 'fas fa-laptop', description: 'Technology facts' },
        { name: 'Social Issues', icon: 'fas fa-users', description: 'Social awareness' }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('kidspireUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showDashboard();
        updateNavigationForLoggedInUser();
    } else {
        updateNavigationForLoggedOutUser();
    }
    
    // Add event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
    
    // Student details form
    const studentDetailsForm = document.getElementById('studentDetailsForm');
    if (studentDetailsForm) {
        studentDetailsForm.addEventListener('submit', handleStudentDetails);
    }
    
    // Date of birth input formatting
    const dobInput = document.getElementById('dateOfBirth');
    if (dobInput) {
        dobInput.addEventListener('input', formatDateInput);
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

// Modal functions
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('signupModal').style.display = 'none';
}

function showSignup() {
    document.getElementById('signupModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Form handling functions
function handleLogin(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const isParent = document.getElementById('isParent').checked;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate login (in real app, this would be an API call)
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    // Create user object
    currentUser = {
        email: email,
        isParent: isParent,
        loginTime: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('kidspireUser', JSON.stringify(currentUser));
    
    // Close modal and proceed
    closeModal('loginModal');
    
    // Update navigation to show logout button
    updateNavigationForLoggedInUser();
    
    if (isParent) {
        // Parent login - show student details form
        showStudentDetailsPage();
    } else {
        // Student login - show dashboard
        showDashboard();
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const isParent = document.getElementById('isParentSignup').checked;
    
    // Validation
    if (!email || !phone || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    
    // Create user object
    currentUser = {
        email: email,
        phone: phone,
        isParent: isParent,
        signupTime: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('kidspireUser', JSON.stringify(currentUser));
    
    // Close modal and proceed
    closeModal('signupModal');
    
    // Update navigation to show logout button
    updateNavigationForLoggedInUser();
    
    if (isParent) {
        // Parent signup - show student details form
        showStudentDetailsPage();
    } else {
        // Student signup - show student details form
        showStudentDetailsPage();
    }
}

function handleStudentDetails(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const dateOfBirth = formData.get('dateOfBirth');
    const gender = formData.get('gender');
    
    // Validation
    if (!firstName || !lastName || !dateOfBirth || !gender) {
        alert('Please fill in all fields');
        return;
    }
    
    // Date validation
    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!dateRegex.test(dateOfBirth)) {
        alert('Please enter date in DD/MM/YYYY format');
        return;
    }
    
    const [, day, month, year] = dateOfBirth.match(dateRegex);
    const date = new Date(year, month - 1, day);
    
    if (date.getDate() != day || date.getMonth() != month - 1 || date.getFullYear() != year) {
        alert('Please enter a valid date');
        return;
    }
    
    // Calculate age
    const today = new Date();
    let age = today.getFullYear() - year;
    const monthDiff = today.getMonth() - (month - 1);
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) {
        age--;
    }
    
    // Check if age is appropriate for primary school
    if (age < 5 || age > 12) {
        alert('Age must be between 5 and 12 years for primary school');
        return;
    }
    
    // Update user object with student details
    currentUser.studentDetails = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        gender: gender,
        age: age
    };
    
    // Save updated user
    localStorage.setItem('kidspireUser', JSON.stringify(currentUser));
    
    // Show dashboard
    showDashboard();
}

// Page navigation functions
function showStudentDetailsPage() {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('studentDetailsPage').style.display = 'block';
    document.getElementById('dashboardPage').style.display = 'none';
}

function showDashboard() {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('studentDetailsPage').style.display = 'none';
    document.getElementById('dashboardPage').style.display = 'block';
    
    // Update user name in navigation
    if (currentUser && currentUser.studentDetails) {
        const userName = document.querySelector('.user-name');
        if (userName) {
            userName.textContent = `Hello, ${currentUser.studentDetails.firstName}!`;
        }
    }
    
    // Update navigation to show logout button
    updateNavigationForLoggedInUser();
}

// Dashboard functions
function selectClass(classNumber) {
    selectedClass = classNumber;
    
    // Update active class in sidebar
    const classLinks = document.querySelectorAll('.nav-list a');
    classLinks.forEach(link => {
        link.classList.remove('active');
        if (link.textContent === `Class ${classNumber}`) {
            link.classList.add('active');
        }
    });
    
    // Update subjects list (only if it exists)
    updateSubjectsList(classNumber);
    
    // Update main content
    updateMainContent(classNumber);
}

function updateSubjectsList(classNumber) {
    const subjectsList = document.getElementById('subjectsList');
    if (!subjectsList) return; // Exit if subjectsList doesn't exist (it's commented out)
    
    const subjects = subjectsByClass[classNumber];
    
    subjectsList.innerHTML = '';
    
    subjects.forEach(subject => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#" onclick="selectSubject('${subject.name}')">
                <i class="${subject.icon}"></i> ${subject.name}
            </a>
        `;
        subjectsList.appendChild(li);
    });
}

function updateMainContent(classNumber) {
    const dashboardContent = document.getElementById('dashboardContent');
    const subjects = subjectsByClass[classNumber];
    
    dashboardContent.innerHTML = `
        <div class="content-section fade-in">
            <h2>Class ${classNumber} Subjects</h2>
            <p>Choose a subject to start learning!</p>
            <div class="subjects-grid">
                ${subjects.map(subject => `
                    <div class="subject-card" onclick="selectSubject('${subject.name}')" data-color="${subject.color}" style="--subject-color: ${subject.color}">
                        <i class="${subject.icon}"></i>
                        <h3>${subject.name}</h3>
                        <p>${subject.description}</p>
                    </div>
                `).join('')}
            </div>
            
            <h3 style="margin-top: 2rem;">Educational Games</h3>
            <p>Play fun games to reinforce your learning!</p>
            <div class="games-grid">
                ${subjects.map(subject => {
                    const games = gamesBySubject[subject.name] || [];
                    return games.map(game => `
                        <div class="game-card" onclick="playGame('${game.name}', '${subject.name}')">
                            <i class="${game.icon}"></i>
                            <h4>${game.name}</h4>
                            <p>${game.description}</p>
                            <small>${subject.name}</small>
                        </div>
                    `).join('');
                }).join('')}
            </div>
        </div>
    `;
}

function selectSubject(subjectName) {
    // In a real application, this would navigate to the subject content
    alert(`Starting ${subjectName} lessons! This would open the learning content for ${subjectName}.`);
    
    // You could add more functionality here like:
    // - Track progress
    // - Show lessons
    // - Start quizzes
    // - Display achievements
}

function playGame(gameName, subjectName) {
    // In a real application, this would launch the game
    alert(`Starting ${gameName} for ${subjectName}! Get ready to learn and have fun!`);
    
    // You could add more functionality here like:
    // - Launch game in new window
    // - Track game progress
    // - Award points/achievements
}

// Utility functions
function formatDateInput(event) {
    let value = event.target.value.replace(/\D/g, '');
    
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
    }
    if (value.length >= 5) {
        value = value.substring(0, 5) + '/' + value.substring(5, 9);
    }
    
    event.target.value = value;
}

// Settings functions
function showSettings() {
    document.getElementById('settingsModal').style.display = 'block';
}

// Profile functions
function showStudentDetails() {
    const dashboardContent = document.getElementById('dashboardContent');
    if (currentUser && currentUser.studentDetails) {
        dashboardContent.innerHTML = `
            <div class="profile-section fade-in">
                <h3><i class="fas fa-user"></i> Student Details</h3>
                <div class="student-info">
                    <div class="info-row">
                        <strong>Name:</strong> ${currentUser.studentDetails.firstName} ${currentUser.studentDetails.lastName}
                    </div>
                    <div class="info-row">
                        <strong>Date of Birth:</strong> ${currentUser.studentDetails.dateOfBirth}
                    </div>
                    <div class="info-row">
                        <strong>Age:</strong> ${currentUser.studentDetails.age} years
                    </div>
                    <div class="info-row">
                        <strong>Gender:</strong> ${currentUser.studentDetails.gender}
                    </div>
                    <div class="info-row">
                        <strong>Email:</strong> ${currentUser.email}
                    </div>
                </div>
            </div>
        `;
    } else {
        dashboardContent.innerHTML = `
            <div class="profile-section fade-in">
                <h3><i class="fas fa-user"></i> Student Details</h3>
                <p>No student details available. Please complete your profile.</p>
            </div>
        `;
    }
}

function showProgressTracker() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
        <div class="profile-section fade-in">
            <h3><i class="fas fa-chart-line"></i> Progress Tracker</h3>
            <div class="progress-overview">
                <h4>Overall Progress</h4>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 65%"></div>
                </div>
                <p>65% Complete</p>
                
                <h4>Subject-wise Progress</h4>
                <div class="subject-progress">
                    <div class="progress-item">
                        <span>Mathematics</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 80%"></div>
                        </div>
                        <span>80%</span>
                    </div>
                    <div class="progress-item">
                        <span>English</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 70%"></div>
                        </div>
                        <span>70%</span>
                    </div>
                    <div class="progress-item">
                        <span>EVS</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 60%"></div>
                        </div>
                        <span>60%</span>
                    </div>
                    <div class="progress-item">
                        <span>Hindi</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 55%"></div>
                        </div>
                        <span>55%</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showRewards() {
    const dashboardContent = document.getElementById('dashboardContent');
    dashboardContent.innerHTML = `
        <div class="profile-section fade-in">
            <h3><i class="fas fa-trophy"></i> Rewards & Achievements</h3>
            <div class="rewards-grid">
                <div class="reward-item">
                    <i class="fas fa-medal"></i>
                    <div>
                        <h4>Math Master</h4>
                        <p>Completed 50 math problems correctly</p>
                    </div>
                </div>
                <div class="reward-item">
                    <i class="fas fa-star"></i>
                    <div>
                        <h4>Reading Champion</h4>
                        <p>Read 10 stories in a week</p>
                    </div>
                </div>
                <div class="reward-item">
                    <i class="fas fa-book"></i>
                    <div>
                        <h4>Knowledge Seeker</h4>
                        <p>Answered 100 GK questions correctly</p>
                    </div>
                </div>
                <div class="reward-item">
                    <i class="fas fa-palette"></i>
                    <div>
                        <h4>Creative Artist</h4>
                        <p>Completed 5 art projects</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Chatbot functions
function toggleChatbot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
        chatbotWindow.style.display = 'flex';
    } else {
        chatbotWindow.style.display = 'none';
    }
}

function handleChatbotKeypress(event) {
    if (event.key === 'Enter') {
        sendChatbotMessage();
    }
}

function sendChatbotMessage() {
    const input = document.getElementById('chatbotInput');
    const messages = document.getElementById('chatbotMessages');
    
    if (input.value.trim() === '') return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chatbot-message user-message';
    userMessage.innerHTML = `<p>${input.value}</p>`;
    messages.appendChild(userMessage);
    
    const userQuery = input.value.toLowerCase();
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chatbot-message bot-message';
        
        let response = "I'm here to help you learn! ";
        
        if (userQuery.includes('math') || userQuery.includes('mathematics')) {
            response += "Mathematics is fun! Try practicing addition and subtraction. Would you like to play a math game?";
        } else if (userQuery.includes('english') || userQuery.includes('grammar')) {
            response += "English is amazing! Practice reading and writing daily. I can help you with grammar rules!";
        } else if (userQuery.includes('science') || userQuery.includes('evs')) {
            response += "Science is all around us! Explore nature and ask questions about how things work.";
        } else if (userQuery.includes('hindi')) {
            response += "Hindi is our beautiful language! Practice reading and writing Hindi letters and words.";
        } else if (userQuery.includes('telugu')) {
            response += "Telugu is a wonderful language! Practice reading and writing Telugu letters and words. Telugu has rich literature and culture!";
        } else if (userQuery.includes('help')) {
            response += "I can help you with your studies! Ask me about any subject, homework, or learning tips.";
        } else {
            response += "That's interesting! Can you tell me more about what you'd like to learn?";
        }
        
        botMessage.innerHTML = `<p>${response}</p>`;
        messages.appendChild(botMessage);
        
        // Scroll to bottom
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
    
    // Scroll to bottom
    messages.scrollTop = messages.scrollHeight;
}

// Navigation update functions
function updateNavigationForLoggedInUser() {
    const loginBtn = document.querySelector('.btn-login');
    const signupBtn = document.querySelector('.btn-signup');
    const settingsBtn = document.querySelector('.btn-settings');
    
    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';
    if (settingsBtn) settingsBtn.style.display = 'block';
}

function updateNavigationForLoggedOutUser() {
    const loginBtn = document.querySelector('.btn-login');
    const signupBtn = document.querySelector('.btn-signup');
    const settingsBtn = document.querySelector('.btn-settings');
    
    if (loginBtn) loginBtn.style.display = 'block';
    if (signupBtn) signupBtn.style.display = 'block';
    if (settingsBtn) settingsBtn.style.display = 'none';
}

// Logout function
function logout() {
    // Show confirmation dialog
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('kidspireUser');
        currentUser = null;
        selectedClass = null;
        
        // Reset to home page
        document.querySelector('.hero').style.display = 'block';
        document.getElementById('studentDetailsPage').style.display = 'none';
        document.getElementById('dashboardPage').style.display = 'none';
        
        // Reset user name
        const userName = document.querySelector('.user-name');
        if (userName) {
            userName.textContent = 'Welcome!';
        }
        
        // Update navigation to show login/signup buttons
        updateNavigationForLoggedOutUser();
        
        // Clear forms
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const studentDetailsForm = document.getElementById('studentDetailsForm');
        
        if (loginForm) loginForm.reset();
        if (signupForm) signupForm.reset();
        if (studentDetailsForm) studentDetailsForm.reset();
        
        // Show logout notification
        showNotification('You have been successfully logged out!', 'success');
        
        // Scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Add some interactive features
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
