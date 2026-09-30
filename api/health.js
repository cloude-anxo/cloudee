module.exports = (req, res) => {
  const k = process.env.OPENROUTER_API_KEY;
  res.status(200).json({ ok: true, aiConfigured: !!k && !k.startsWith("PASTE_") });
};
