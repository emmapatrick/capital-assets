// contains controller functions to be called in endpoint routes
// TODO: may need to change to asyn in the future

// controller function to retrieve all assets on homepage
export function getAssets(req, res) {
    // send OK status & welcome message
    res.status(200).send("Welcome friend!");
}

// controller function to create an asset
export function createAsset(req, res) {
    res.status(201).json({message: "Posted successfully."});
}

// controller function to update an asset
export function updateAsset(req, res) {
    res.status(200).json({message: "Updated successfully."});
}

// controller function to delete an asset
export function deleteAsset(req, res) {
    res.status(200).json({message: "Deleted successfully."});
}
