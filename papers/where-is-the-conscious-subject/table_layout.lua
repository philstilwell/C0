-- Apply content-specific column widths and publication colors to Pandoc tables.

local layouts = {
  ["Field|Required entry"] = {0.25, 0.75},
  ["Status|Formal condition|Interpretation"] = {0.20, 0.30, 0.50},
  ["Term or symbol|Role in the framework|Interpretive guardrail"] = {0.18, 0.30, 0.52},
  ["Stage|Required action|Failure output|Guardrail"] = {0.12, 0.30, 0.20, 0.38},
  ["Case|Competing boundaries|Decisive perturbation|Likely error if boundary is assumed"] = {0.15, 0.24, 0.27, 0.34},
  ["Misuse|Why invalid|Required correction"] = {0.26, 0.35, 0.39},
  ["Regime and candidate|||Role profile|Boundary result"] = {0.20, 0.09, 0.09, 0.27, 0.35},
  ["Candidate or test|Autonomy/role result|Interpretation"] = {0.24, 0.32, 0.44},
}

local function header_key(tbl)
  if not tbl.head or not tbl.head.rows or #tbl.head.rows == 0 then
    return ""
  end
  local labels = {}
  for _, cell in ipairs(tbl.head.rows[1].cells) do
    table.insert(labels, pandoc.utils.stringify(cell.contents))
  end
  return table.concat(labels, "|")
end

local function prefix_cell(cell, latex)
  if FORMAT:match("latex") == nil then
    return cell
  end
  local marker = pandoc.RawInline("latex", latex)
  if #cell.contents == 0 then
    cell.contents = {pandoc.Plain({marker})}
  else
    local first = cell.contents[1]
    if first.t == "Plain" or first.t == "Para" then
      table.insert(first.content, 1, marker)
    else
      table.insert(cell.contents, 1, pandoc.Plain({marker}))
    end
  end
  return cell
end

local function style_row(row, latex)
  for i, cell in ipairs(row.cells) do
    row.cells[i] = prefix_cell(cell, latex)
  end
  return row
end

function Table(tbl)
  local key = header_key(tbl)
  local widths = layouts[key]
  if widths then
    for i, width in ipairs(widths) do
      local alignment = tbl.colspecs[i][1]
      tbl.colspecs[i] = {alignment, width}
    end
  end

  if FORMAT:match("latex") then
    for i, row in ipairs(tbl.head.rows) do
      tbl.head.rows[i] = style_row(
        row,
        "\\cellcolor{TableHeader}\\color{white}\\bfseries{}"
      )
    end

    local row_index = 0
    for _, body in ipairs(tbl.bodies) do
      for i, row in ipairs(body.head) do
        body.head[i] = style_row(
          row,
          "\\cellcolor{TableHeader}\\color{white}\\bfseries{}"
        )
      end
      for i, row in ipairs(body.body) do
        row_index = row_index + 1
        if row_index % 2 == 0 then
          body.body[i] = style_row(row, "\\cellcolor{TableAlt}{}")
        end
      end
    end
  end

  return tbl
end
