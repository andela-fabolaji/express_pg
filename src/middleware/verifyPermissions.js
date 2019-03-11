function verifyPermissions(req, res, next, permission) {
  console.log(permission)
  // res.json({
  //   permission: permission,
  //   user: req.user
  // });
}

module.exports = verifyPermissions;