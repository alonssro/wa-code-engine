var express = require('express');
const { CloudantV1 } = require('@ibm-cloud/cloudant');

var router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Registry:
 *       type: object
 *       required:
 *         - email
 *         - account
 *       properties:
 *         email:
 *           type: string
 *           description: User's email
 *         account:
 *           type: number
 *           description: User's account number
 *       example:
 *         email: john@doe.com
 *         account: 12345
 */

/**
 * @swagger
 * tags:
 *   name: Registry
 *   description: Registry managing
 * /:
 *   post:
 *     summary: Create new registry
 *     tags: [Registry]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Registry'
 *     responses:
 *       200:
 *         description: The created registry
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Registry'
 *       500:
 *         description: Some server error
 *
 */
router.post('/', async function (req, res, next) {

  const service = CloudantV1.newInstance();
  
  const { email, account } = req?.body || {};
  const productsDoc = {
    email,
    account
  };
  await service.postDocument({
    db: 'registries',
    document: productsDoc,
    contentType: 'application/json'
  })
  return res.json({ email, account }).status(200);
});

module.exports = router;
