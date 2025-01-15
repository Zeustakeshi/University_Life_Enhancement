package service.notification.controller;

import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.notification.service.EmailService;

import java.util.Map;
@RestController
@RequestMapping("/api/v1/notifications")
public class NotificationController {

    @Autowired
    private EmailService emailService; // Sử dụng @Autowired để inject

    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmail(@RequestBody Map<String, String> emailRequest) {
        String to = emailRequest.get("to");
        String subject = emailRequest.get("subject");
        String body = emailRequest.get("body");

        try {
            emailService.sendEmail(to, subject, body);
            return ResponseEntity.ok("Email sent successfully");
        } catch (MessagingException e) {
            return ResponseEntity.status(500).body("Error sending email: " + e.getMessage());
        }
    }
}

