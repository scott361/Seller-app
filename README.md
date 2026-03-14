# Seller-app
<div class="auth-container">
    <h2>Seller Signup</h2>
    <input type="text" id="bizName" placeholder="Business Name">
    <input type="text" id="sellerLocation" placeholder="Pickup Location (City/Area)">
    <input type="tel" id="mobile" placeholder="Mobile Number">
    <button onclick="requestOTP()">Generate OTP</button>

    <div id="otpSection" style="display:none;">
        <input type="text" id="otpInput" placeholder="Enter 6-digit OTP">
        <button onclick="verifyAndLogin()">Login</button>
    </div>
</div>
