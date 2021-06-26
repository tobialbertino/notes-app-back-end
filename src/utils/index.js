/* eslint-disable */

const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  body,
  tags,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapUserDBtoModel = ({ id, username, fullname}) => ({
  id,
  username,
  fullname,
})

module.exports = { mapDBToModel, mapUserDBtoModel };
