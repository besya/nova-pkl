interface ConfigurationParams {
  items: ConfigurationItem[]
}

interface ConfigurationItem {
  /**
   * The scope to get the configuration section for.
   */
  scopeUri?: URI

  /**
   * The configuration section asked for.
   */
  section?: string
}
