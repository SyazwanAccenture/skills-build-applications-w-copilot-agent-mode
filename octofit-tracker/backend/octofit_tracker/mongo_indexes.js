// Run this in mongosh to ensure unique index on email for users
use octofit_db
db.octofit_tracker_user.createIndex({ "email": 1 }, { unique: true })
