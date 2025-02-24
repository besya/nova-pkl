(lineComment) @comment
(blockComment) @comment
(docComment) @comment

(clazz (identifier) @identifier.type.class)
(typeAlias (identifier) @identifier.type)
((identifier) @identifier.type
 (#match? @identifier.type "^[A-Z]"))
(moduleClause (qualifiedIdentifier (identifier) @identifier.type.global))

(typeArgumentList
  "<" @bracket
  ">" @bracket)

(typeParameter (identifier) @identifier.type)
(typeAnnotation (type (declaredType) @identifier.type))
(newExpr (type (declaredType) @identifier.type))

; Method calls

(methodCallExpr
  (identifier) @identifier.method)

; Method definitions

(classMethod (methodHeader (identifier) @identifier.method))
(objectMethod (methodHeader (identifier) @identifier.method))

; Identifiers

(classProperty (identifier) @identifier.property)
(objectProperty (identifier) @identifier.property)

(parameterList (typedIdentifier (identifier) @identifier.argument))
(objectBodyParameters (typedIdentifier (identifier) @identifier.argument))

(annotation (qualifiedIdentifier (identifier) @identifier.decorator))
(annotation "@" @identifier.decorator)

(forGenerator (typedIdentifier (identifier) @variable))
(letExpr (typedIdentifier (identifier) @variable))
(variableExpr (identifier) @variable)
(importClause (identifier) @variable)
(importGlobClause (identifier) @variable)
(variableObjectLiteral (identifier) @variable)
(propertyCallExpr (identifier) @identifier.key)

; Literals

(stringConstant) @string
(slStringLiteralPart) @string
(mlStringLiteralPart) @string

(interpolationExpr
  "\\(" @string.escape
  ")" @string.escape) @none

(interpolationExpr
 "\\#(" @string.escape
 ")" @string.escape) @none

(interpolationExpr
  "\\##(" @string.escape
  ")" @string.escape) @none

(escapeSequence) @string.escape

(intLiteral) @value.number
(floatLiteral) @value.number

; Operators

"??" @operator
"="  @operator
"<"  @operator
">"  @operator
"!"  @operator
"==" @operator
"!=" @operator
"<=" @operator
">=" @operator
"&&" @operator
"||" @operator
"+"  @operator
"-"  @operator
"**" @operator
"*"  @operator
"/"  @operator
"~/" @operator
"%"  @operator
"|>" @operator


"|"  @operator
"->" @operator

"," @punctuation
":" @punctuation
"." @punctuation
"?." @punctuation
"...?" @punctuation
"..." @punctuation

"(" @bracket
")" @bracket
"]" @bracket
"{" @bracket
"}" @bracket

; Keywords

"amends" @keyword
"class" @keyword.construct
"typealias" @keyword.construct
"function" @keyword.construct
((modifier) @keyword.modifier)
"as" @keyword.modifier
"extends" @keyword.modifier
(trueLiteral) @value.boolean
(falseLiteral) @value.boolean
(nullLiteral) @value.null
"new" @keyword
"if" @keyword.condition
"else" @keyword.condition
"import*" @keyword
"import" @keyword
(moduleClause "module" @keyword)
(importExpr "import" @keyword)
(importGlobExpr "import*" @keyword)
(readExpr "read" @keyword)
(readGlobExpr "read*" @keyword)
(readOrNullExpr "read?" @keyword)
(traceExpr "trace" @keyword)
(throwExpr "throw" @keyword)
(moduleExpr "module" @identifier.type)
(unknownType) @identifier.type
(nothingType) @identifier.type
(moduleType) @identifier.type
(outerExpr) @identifier.type
"super" @keyword
(thisExpr) @keyword.self
(ERROR) @invalid
