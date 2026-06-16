exports.createPassRequest = async (req, res) => {
    try {
        const { userId, passDetails } = req.body;
        const newPassRequest = await PassRequest.create({ userId, ...passDetails });
        res.status(201).json({ message: 'Pass request created successfully', data: newPassRequest });
    } catch (error) {
        res.status(500).json({ message: 'Error creating pass request', error: error.message });
    }
};

exports.approvePassRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPassRequest = await PassRequest.update({ status: 'approved' }, { where: { id } });
        if (updatedPassRequest[0] === 0) {
            return res.status(404).json({ message: 'Pass request not found' });
        }
        res.status(200).json({ message: 'Pass request approved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error approving pass request', error: error.message });
    }
};

exports.rejectPassRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPassRequest = await PassRequest.update({ status: 'rejected' }, { where: { id } });
        if (updatedPassRequest[0] === 0) {
            return res.status(404).json({ message: 'Pass request not found' });
        }
        res.status(200).json({ message: 'Pass request rejected successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error rejecting pass request', error: error.message });
    }
};

exports.getPassHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        const passHistory = await PassRequest.findAll({ where: { userId } });
        res.status(200).json({ data: passHistory });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pass history', error: error.message });
    }
};

exports.verifyPassRequest = async (req, res) => {
    try {
        const { qrCode } = req.params;
        const passRequest = await PassRequest.findOne({ where: { qrCode } });
        if (!passRequest) {
            return res.status(404).json({ message: 'Pass request not found' });
        }
        res.status(200).json({ data: passRequest });
    } catch (error) {
        res.status(500).json({ message: 'Error verifying pass request', error: error.message });
    }
};