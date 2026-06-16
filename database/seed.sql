INSERT INTO Users (username, password, role) VALUES
('student1', 'hashed_password1', 'Student'),
('student2', 'hashed_password2', 'Student'),
('guard1', 'hashed_password3', 'Security Guard'),
('admin1', 'hashed_password4', 'Administrator');

INSERT INTO PassRequests (userId, status, createdAt, updatedAt) VALUES
(1, 'approved', NOW(), NOW()),
(1, 'pending', NOW(), NOW()),
(2, 'rejected', NOW(), NOW());

INSERT INTO Notifications (userId, message, createdAt) VALUES
(1, 'Your pass request has been approved.', NOW()),
(2, 'Your pass request has been rejected.', NOW());

INSERT INTO AuditLogs (userId, actionType, createdAt) VALUES
(1, 'Created pass request', NOW()),
(2, 'Rejected pass request', NOW());

INSERT INTO Sessions (userId, token, createdAt) VALUES
(1, 'sample_jwt_token1', NOW()),
(2, 'sample_jwt_token2', NOW());