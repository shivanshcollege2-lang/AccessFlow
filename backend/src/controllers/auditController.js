exports.logAction = async (req, res) => {
    const { actionType, userId } = req.body;

    if (!actionType || !userId) {
        return res.status(400).json({ message: "Action type and user ID are required." });
    }

    try {
        const newLog = {
            actionType,
            userId,
            timestamp: new Date()
        };

        // Assuming AuditLog is a model that interacts with the database
        const auditLog = await AuditLog.create(newLog);
        return res.status(201).json(auditLog);
    } catch (error) {
        console.error("Error logging action:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

exports.getAuditLogs = async (req, res) => {
    try {
        const logs = await AuditLog.findAll();
        return res.status(200).json(logs);
    } catch (error) {
        console.error("Error fetching audit logs:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};