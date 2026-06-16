function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatTime(date) {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function formatPassStatus(status) {
    const statusMap = {
        pending: 'Pending Approval',
        approved: 'Approved',
        rejected: 'Rejected',
    };
    return statusMap[status] || 'Unknown Status';
}

function formatNotificationMessage(type, details) {
    switch (type) {
        case 'pass_approved':
            return `Your pass request has been approved: ${details}`;
        case 'pass_rejected':
            return `Your pass request has been rejected: ${details}`;
        case 'new_pass_request':
            return `A new pass request has been created: ${details}`;
        default:
            return 'You have a new notification.';
    }
}

export { formatDate, formatTime, formatPassStatus, formatNotificationMessage };