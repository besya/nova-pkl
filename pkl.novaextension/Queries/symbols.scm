; ((variable_init (variable_assignment ((variable) @name) @subtree (#set! role variable))))
;
; ((function_definition
;     name: (variable) @name
;     parameters: (function_parameter_list) @arguments.target
;   )
;   (#set! role function)
;   (#set! arguments.query "arguments.scm")
; ) @subtree
;
; ((loop_iter
;   "for"
;   (variable) @name
;   "in"
;   )
;   (#set! role variable)
; ) @subtree


((moduleClause (qualifiedIdentifier (identifier) @name))
(#set! role package)) @subtree

((clazz (identifier) @name) (#set! role class)) @subtree
((typeAlias (identifier) @name) (#set! role type)) @subtree
((classProperty (identifier) @name) (#set! role property)) @subtree
((classMethod (methodHeader (identifier) @name)) (#set! role method)) @subtree
((objectMethod (methodHeader (identifier) @name)) (#set! role method)) @subtree

